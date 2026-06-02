# SILA — цифровая архитектура для бизнеса

Премиальный сайт дизайн-студии SILA: тёмный minimal UI, стеклянные панели, сдержанная этническая пластика и формы заявок с отправкой в Telegram.

## Стек

- Next.js (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion (точечные анимации)
- Lenis (плавный скролл)
- Zod (валидация форм)
- Lucide React (иконки)

## Установка

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Настройка `.env.local`

Скопируйте `.env.example` в `.env.local` и заполните:

```env
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/your_username
NEXT_PUBLIC_SITE_URL=https://your-domain.ru
```

## Настройка Telegram-бота

1. Создайте бота через [@BotFather](https://t.me/BotFather) и получите `TELEGRAM_BOT_TOKEN`.
2. Узнайте `chat_id` чата или канала, куда должны приходить заявки.
3. Добавьте бота в чат и отправьте тестовое сообщение.
4. Заявки с сайта отправляются на `POST /api/lead` (формы «Проект» и «Сотрудничество»).

Токен и chat id **никогда** не попадают в клиентский код.

## Замена изображений кейсов

Данные кейсов: `content/works.ts`.  
Замените пути в полях `image` и `gallery` на реальные файлы в `public/images/works/` (WebP/AVIF рекомендуется). Компоненты `PortfolioCard`, `SelectedWorks` и `CasePreviewModal` подхватят новые пути без правок логики.

## Подключение шрифта Вязь

1. Положите файлы шрифта в `public/fonts/`.
2. В `app/fonts.ts` подключите `next/font/local` для Вязи.
3. Обновите класс `.font-vyaz` в `app/globals.css`, убрав fallback-комментарий `TODO`.

Шрифт **Satyr SP Basic** — аналогично: замените временный Cormorant Garamond в `app/fonts.ts` на локальный Satyr.

## Структура проекта

```text
app/           — страницы, layout, API, шрифты, глобальные стили
components/    — layout, ui, sections, forms, portfolio
content/       — навигация, услуги, кейсы, принципы, процесс
lib/           — telegram, validation, utils
public/        — patterns, images, fonts
```

## Чек-лист перед публикацией

- Заполнен `.env.local`, проверена отправка обеих форм
- Заменены placeholder-изображения кейсов
- Подключены шрифты Satyr и Вязь (при наличии файлов)
- Обновлены `NEXT_PUBLIC_SITE_URL` и canonical
- Пройдены `lint`, `typecheck`, `build`
- Проверены mobile (360/390), tablet (768), desktop (1440+)
- Проверены focus states, Escape в меню и modal, `prefers-reduced-motion`

