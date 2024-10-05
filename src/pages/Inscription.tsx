"use client"

import React from 'react'
import { AiFillEye } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from '../components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../components/ui/form'
import { Input } from '../components/ui/input'
import { Link } from 'react-router-dom'
import logo from '/public/logo-univere-blog.png'
import { passwordRegex, USER } from "../global/constant/Constants";
import { AiFillEyeInvisible } from "react-icons/ai";
import axios from 'axios'
import { useToast } from "../hooks/use-toast"
import { Toaster } from '../components/ui/toaster';

// Define your form schema using zod
const formSchema = z.object({
  secondname: z
    .string({
      required_error: "la saisie du prénom est obligatoire !",
      invalid_type_error: "le format du prénom n'est pas valide"
    })
    .trim()
    .min(3, {
      message: "votre prénom n'est pas assez long !",
    })
    .max(50, {
      message: "veillez réduire la taille de votre prénom !"
    }),

  firstname: z
    .string({
      required_error: "la saisie du nom est obligatoire !",
      invalid_type_error: "le format du nom n'est pas valide"
    })
    .trim()
    .min(3, {
      message: "votre nom n'est pas assez long !",
    })
    .max(50, {
      message: "veillez réduire la taille de votre nom !"
    }),

  email: z
    .string({
      required_error: "l'addresse email est obligatoire !"
    })
    .describe("Addresse Email")
    .trim()
    .min(3, {
      message: "Addresse email n'est pas assez long !",
    })
    .max(50, {
      message: "veillez réduire la taille de votre addresse email !"
    })
    .email({
      message: "Format addresse email invalide !"
    }),

  password: z
    .string({
      required_error: "Password is required. !",
    })
    .trim()
    .describe("Mot de passe")
    .regex(passwordRegex, {
      message: "Format du mot de passe invalide !"
    })
});

const Inscription: React.FC = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  const { toast } = useToast();
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    axios.post(`${USER}signup`, {
      name: `${values.secondname} ${values.firstname}`,
      email: values.email,
      password: values.password
    })
      .then(response => {
        setMessage(`${response.data}`)
        console.log(response.data);

        toast({
          description: "Vous venez de recevoir un code de vérification par email.",
        })
      })
      .catch(error => {
        console.log(error);
        throw new Error(`Erreur lors de l'appel d'API ${error}`);
      })


  }

  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [message, setMessage] = React.useState<string>('')
  return (
    <div className='signup container flex items-center justify-center py-2 md:py-4 min-h-screen'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full md:w-1/2 bg-black/75 backdrop-blur-sm text-light shadow rounded-md p-6">
          {/* HEAD */}
          <div className="flex flex-col items-center gap-2">
            {/* Logo */}
            <div className="mx-auto w-48">
              <img
                src={logo}
                alt="Logo Universe Blog"
                className='w-full h-full object-contain'
              />
            </div>

            <p className="text-xs md:text-sm text-center text-light/90 font-medium">
              Bienvenue a Universe Blog, Rejoins la communauté et partage tes centres d'intérets, tes découvertes et tout ton univers dans des blogs publics !
            </p>

            <h1 className="text-3xl md:text-5xl text-center text-light/90 font-bold">
              <span className="text-primary">I</span>nscriptio<span className="text-primary">n</span>
            </h1>
          </div>

          {/* Input FORM */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 w-full">
              <FormField
                control={form.control}
                name="secondname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prenom:</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        autoComplete='off'
                        required
                        minLength={3}
                        maxLength={50}
                        placeholder="ex: Barthez"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Nom:</FormLabel>
                    <FormControl>
                      <Input
                        type='text'
                        autoComplete='off'
                        required
                        minLength={3}
                        maxLength={50}
                        placeholder="ex: Kenwou"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (

                <FormItem>
                  <FormLabel>Address Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder="exemple@gmail.com"
                      required
                      autoComplete='off'
                      minLength={7}
                      maxLength={60}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={passwordVisible ? 'textpassword' : 'password'}
                        placeholder="****************"
                        autoComplete='off'
                        required
                        minLength={7}
                        maxLength={60}
                        {...field}
                      />
                    </FormControl>
                    <button
                      type='button'
                      className='absolute w-5 h-5 right-2 top-1/2 -translate-y-1/2'
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {
                        passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye className='text-light/70' />
                      }
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex items-center gap-2'>
            <input
              id='conditions'
              type="checkbox"
              checked={termsAccepted}
              className="relative w-3 md:w-4 h-3 md:h-4 aspect-square !appearance-none !bg-none checked:!bg-gradient-to-tr checked:!from-primary checked:!to-white bg-white border border-gray-300 shadow-sm rounded !outline-none !ring-0 !text-transparent !ring-offset-0 checked:!border-sky-400 hover:!border-sky-400 cursor-pointer transition-all duration-300 ease-in-out focus-visible:!outline-offset-2 focus-visible:!outline-2 focus-visible:!outline-sky-400/30 focus-visible:border-sky-400 after:w-[35%] after:h-[53%] after:absolute after:opacity-0 after:top-[40%] after:left-[50%] after:-translate-x-2/4 after:-translate-y-2/4 after:rotate-[25deg] after:drop-shadow-[1px_0.5px_1px_rgba(56,149,248,0.5)] after:border-r-[0.17em] after:border-r-white after:border-b-[0.17em] after:border-b-white after:transition-all after:duration-200 after:ease-linear checked:after:opacity-100 checked:after:rotate-45"
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            <span className="text-xs md:text-sm text-light">
              <label htmlFor="conditions">J'ai lu et j'accepte les </label>
              <Link
                to={"/terms-et-conditions-d-utilisations"}
                className='text-primary font-medium hover:underline p-1 text-nowrap'
              >
                conditions d'utilisations
              </Link>
            </span>
          </div>
          {message &&

            <p className="text-xs md:text-sm text-destructive font-medium">
              {message}
            </p>
          }

          <Button
            className="w-fit mx-auto my-3 px-6 md:px-10 py-3 md:py-5 before:ease relative overflow-hidden border border-primary bg-primary transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40"
            type="submit"
            disabled={!termsAccepted}
          >
            <span className="relative z-10 text-lg font-medium">
              S'inscrire
            </span>
          </Button>

          <p className="flex gap-1 items-center text-sm">
            <span className="text-nowrap"> Vous avez déjà un compte ?</span>
            <Link
              to="/signin"
              className='text-primary hover:underline font-medium p-1 text-nowrap'
            >
              Se connecter
            </Link>
          </p>
        </form>
      </Form>

      <Toaster />
    </div>
  )
}


export default Inscription