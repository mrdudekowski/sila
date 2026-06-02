import { z } from "zod";

const phoneRegex = /^[\d\s+()-]{7,20}$/;

export const leadFormSchema = z.object({
  formType: z.literal("lead"),
  name: z.string().trim().min(2, "Укажите имя").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(7, "Укажите телефон")
    .max(24)
    .regex(phoneRegex, "Некорректный формат телефона"),
  telegram: z.string().trim().max(64).optional().or(z.literal("")),
  projectType: z.enum([
    "Сайт",
    "Интернет-магазин",
    "Приложение",
    "Айдентика и цифровая архитектура",
    "Комплексный проект",
    "Другое",
  ]),
  message: z.string().trim().min(10, "Опишите задачу").max(2000),
  consent: z.literal(true, {
    message: "Необходимо согласие на обработку данных",
  }),
  website: z.string().max(0).optional(),
});

export const joinFormSchema = z.object({
  formType: z.literal("join"),
  name: z.string().trim().min(2, "Укажите имя").max(80),
  telegram: z.string().trim().min(2, "Укажите Telegram").max(64),
  email: z.string().trim().email("Некорректный email").max(120),
  specialization: z.enum([
    "UX/UI Design",
    "Frontend Development",
    "Backend Development",
    "Motion Design",
    "Brand Design",
    "Copywriting",
    "Project Management",
    "Другое",
  ]),
  portfolio: z.string().trim().url("Укажите ссылку на портфолио").max(300),
  about: z.string().trim().min(20, "Расскажите о себе").max(2000),
  consent: z.literal(true, {
    message: "Необходимо согласие на обработку данных",
  }),
  website: z.string().max(0).optional(),
});

export const apiPayloadSchema = z.discriminatedUnion("formType", [
  leadFormSchema,
  joinFormSchema,
]);

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type JoinFormData = z.infer<typeof joinFormSchema>;
export type ApiPayload = z.infer<typeof apiPayloadSchema>;
