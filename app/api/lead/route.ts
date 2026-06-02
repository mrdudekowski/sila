import { sendTelegramMessage } from "@/lib/telegram";
import { apiPayloadSchema } from "@/lib/validation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = apiPayloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Некорректные данные формы", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;

    if (data.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    await sendTelegramMessage(data);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    if (error instanceof Error && error.message.includes("not configured")) {
      return NextResponse.json(
        { error: "Сервис временно недоступен" },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: "Не удалось отправить заявку" },
      { status: 502 },
    );
  }
}
