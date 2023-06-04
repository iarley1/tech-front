import { z } from "zod";
import { iContact } from "./contactSchema";

export const loginSchema = z.object({
    email: z.string().email("Deve ser um email").nonempty("O email é obrigatiório"),
    password: z.string().nonempty("A senha é obrigatória")
})

export const registerSchema = z.object({
    name: z.string().max(45).nonempty("O nome campo é obrigatorio"),
    email: z.string().email("Deve ser um email").max(45).nonempty("o email é obrigatorio"),
    phoneNumber: z.string().nonempty("O numero é obrigatorio").refine(value => /^\(\d{2}\)\s\d{5}-\d{4}$/.test(value), {
        message: 'Preencha um número de telefone válido',
    }),
    password: z.string().max(120).nonempty("A senha é obrigatoria")
})

export type iLoginUser = z.infer<typeof loginSchema>
export type iRegisterUser = z.infer<typeof registerSchema>

export interface iUser {
    contacts: iContact[]
    createdAt: string
    deletedAt: string | null
    email: string
    id: number
    name: string
    phoneNumber: string
}