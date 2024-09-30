"use client";
import React from "react";
import * as z from "zod";
import AutoForm, { AutoFormSubmit } from "../components/ui/auto-form";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// Define your form schema using zod
const formSchema = z.object({
  username: z
    .string({
      required_error: "la saisie du nom est obligatoire !",
      invalid_type_error: "le format du nom n'est pas valide"
    })
    .describe("Nom d'utilisateur !")
    .trim()
    .min(3, {
      message: "votre nom n'est pas assez long !",
    })
    .max(50, {
      message: "veillez réduire la taille de votre nom !"
    }),

  password: z
    .string({
      required_error: "Password is required.",
    })
    .trim()
    .describe("Mot de passe")
    .regex(passwordRegex, {
      message: "Format du mot de passe invalide !"
    })
});

const Inscription: React.FC = () => {
  return (
    <>
      <AutoForm
        formSchema={formSchema}
      >
        <AutoFormSubmit />
      </AutoForm>
    </>
  );
}

export default Inscription