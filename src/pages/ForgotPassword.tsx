"use client"
import React from 'react'
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

// Define your form schema using zod
const formSchema = z.object({
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
});

const ForgotPassword: React.FC = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className='signup container flex items-center justify-center py-2 md:py-4 min-h-screen'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full md:w-1/2 bg-black/75 backdrop-blur-sm text-light shadow rounded-md p-6">
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

                        <h1 className="text-3xl md:text-5xl text-center text-light/90 font-bold">
                            <span className="text-primary">R</span>écupératio<span className="text-primary">n</span>
                        </h1>


                        <p className="text-xs md:text-sm text-center">
                            Une fois valider vous recevrer un d'authentification par email, rassurer vous d'entrer votre véritable addresse email pour la récupération de votre compte !
                        </p>
                    </div>

                    {/* Input FORM */}
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

                    <Button
                        className="w-fit mx-auto px-6 md:px-10 py-3 md:py-5 before:ease relative overflow-hidden border border-primary bg-primary transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40"
                        type="submit"
                    >
                        <span className="relative z-10 ">
                            Soumettre
                        </span>
                    </Button>

                    <div className="flex gap-6 items-center justify-center my-8">
                        <Link
                            to="/signin"
                            className="p-1 hover:px-4 text-sm font-medium text-primary relative before:absolute before:rounded-md before:bg-primary/50 hover:before:bg-primary/0 before:border-0 hover:before:border-2 hover:before:border-primary  before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.10] hover:before:scale-y-100 before:transition-transform before:ease-in-out transition-all duration-400 before:duration-400"
                        >
                            <span className="relative">Connexion</span>
                        </Link>

                        <Link
                            to="/signup"
                            className="p-1 hover:px-4 text-sm font-medium text-primary relative before:absolute before:rounded-md before:bg-primary/50 hover:before:bg-primary/0 before:border-0 hover:before:border-2 hover:before:border-primary  before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.10] hover:before:scale-y-100 before:transition-transform before:ease-in-out transition-all duration-400 before:duration-400"
                        >
                            <span className="relative">S'inscrire</span>
                        </Link>
                    </div>
                </form>
            </Form>

        </div>
    )
}

export default ForgotPassword





