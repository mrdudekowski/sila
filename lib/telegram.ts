import type { ApiPayload } from "./validation";

function sanitize(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}

function formatLeadMessage(data: Extract<ApiPayload, { formType: "lead" }>): string {
  return [
    "Новая заявка с сайта SILA",
    "",
    "Тип формы: Проект",
    `Имя: ${sanitize(data.name)}`,
    `Компания: ${sanitize(data.company || "—")}`,
    `Телефон: ${sanitize(data.phone)}`,
    `Telegram: ${sanitize(data.telegram || "—")}`,
    `Тип проекта: ${data.projectType}`,
    `Задача: ${sanitize(data.message)}`,
  ].join("\n");
}

function formatJoinMessage(data: Extract<ApiPayload, { formType: "join" }>): string {
  return [
    "Новая заявка на сотрудничество SILA",
    "",
    "Тип формы: Collaboration",
    `Имя: ${sanitize(data.name)}`,
    `Telegram: ${sanitize(data.telegram)}`,
    `Email: ${sanitize(data.email)}`,
    `Специализация: ${data.specialization}`,
    `Портфолио: ${sanitize(data.portfolio)}`,
    `О себе: ${sanitize(data.about)}`,
  ].join("\n");
}

export async function sendTelegramMessage(payload: ApiPayload): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram credentials are not configured");
  }

  const text =
    payload.formType === "lead"
      ? formatLeadMessage(payload)
      : formatJoinMessage(payload);

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Telegram API request failed");
  }

  const result = (await response.json()) as { ok?: boolean };
  if (!result.ok) {
    throw new Error("Telegram API returned an error");
  }
}
