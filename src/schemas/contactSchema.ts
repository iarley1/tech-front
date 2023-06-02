import { z } from "zod";

export const registerContactSchema = z.object({
    name: z.string().max(45).nonempty("O nome campo é obrigatorio"),
    email: z.string().email("Deve ser um email").max(45).nonempty("o email é obrigatorio"),
    phoneNumber: z.string().nonempty("O numero é obrigatorio").refine(value => /^\(\d{2}\)\s\d{5}-\d{4}$/.test(value), {
        message: 'Preencha um número de telefone válido',
    })
})

export const updateContactSchema = registerContactSchema.partial()
export const contactSchema = registerContactSchema.extend({
    id: z.number()
})

export type iUpdateContact = z.infer<typeof updateContactSchema>
export type iContact = z.infer<typeof contactSchema>
export type iRegisterContact = z.infer<typeof registerContactSchema>