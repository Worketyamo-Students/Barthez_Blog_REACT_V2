"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from '../components/ui/button'
import { Form } from '../components/ui/form'
import { Link } from 'react-router-dom'
import logo from '/public/logo-univere-blog.png'
import { Toaster } from "../components/ui/sonner"
import { toast } from "sonner"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "../components/ui/input-otp"

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

const OTPverification: React.FC = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    const [value, setValue] = React.useState("")
    const [beDisable, setBeDisable] = React.useState<boolean>(true)
    const [canResendOTP, setCanResendOTP] = React.useState<boolean>(false)
    const [timeMinute, setTimeMinute] = React.useState<number>(0)
    const [timeSeconde, setTimeSeconde] = React.useState<number>(0)
    const [counter, setCounter] = React.useState<number>(120);

    React.useEffect(() => {
        if (value.length === 6) {
            setBeDisable(false)
        } else {
            setBeDisable(true)
        }
    }, [value]);

    const getOTP = () => {
        // Recupérer les données et analyser...
        console.log(value)
    }

    const resendOTP = () => {
        // Relancer le conteur
        setCounter(120)

        // appel de la route pour envoyer l'otp par mail ...

        // Message de success a l'utilisateur
        toast("Code Renvoyé", {
            description: "Votre code de vérification viens d'etre renvoyé dans votre addresse email allez le récupérer",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
    }

    React.useEffect(() => {
        // Decrementer le compteur de chaque seconde au lancement du composant
        if (counter >= 0) {
            const intervalleID = setInterval(() => {
                setTimeMinute(Math.floor(counter / 60))
                setTimeSeconde(counter % 60)
                setCounter((prevCount) => (prevCount - 1))
                // console.log(`conteur: ${counter}, minutes: ${timeMinute}, secondes: ${timeSeconde}`)
            }, 1000);
            return () => clearInterval(intervalleID);
        }
    }, [counter, timeMinute, timeSeconde]);

    React.useEffect(() => {
        if (counter === 0) {
            setCanResendOTP(true);
        } else {
            setCanResendOTP(false);
        }
    }, [counter])

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
                            Vous avez certainement réçu un code par email,
                            consultez votre boite de réception et remplissez les boites.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl mt-6 md:text-5xl text-center text-light/90 font-bold">
                            <span className="text-primary">V</span>érificatio<span className="text-primary">n</span>
                        </h1>

                        {/* Input FORM */}
                        <div className="my-4 mx-auto">
                            <InputOTP
                                maxLength={6}
                                value={value}
                                onChange={(value) => setValue(value)}
                            >
                                <InputOTPGroup >
                                    <InputOTPSlot index={0} />
                                    <InputOTPSeparator />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSeparator />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSeparator />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSeparator />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSeparator />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>

                            <button
                                disabled={!canResendOTP}
                                className={`my-2 float-end text-sm md:text-base p-1 text-nowrap flex gap-2 ${canResendOTP  ? "text-primary underline" : "text-primary/60"}`}
                                onClick={resendOTP}
                            >
                                <span>
                                    Renvoyer le code
                                </span>
                                {
                                    !canResendOTP &&
                                    <span className='font-semibold'>
                                        0{timeMinute}:{timeSeconde > 9 ? timeSeconde : `0${timeSeconde}`}
                                    </span>
                                }
                            </button>
                        </div>

                        <Button
                            disabled={beDisable}
                            className="w-fit mx-auto px-6 md:px-10 py-3 md:py-5 before:ease relative overflow-hidden border border-primary bg-primary transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40"
                            type="submit"
                            onClick={getOTP}
                        >
                            <span className="relative z-10 text-lg font-medium">
                                Vérifier
                            </span>
                        </Button>
                    </div>

                    <div className="flex gap-6 items-center justify-center my-8">
                        <Link
                            to="/signup"
                            className="p-1 hover:px-4 text-sm font-medium text-primary relative before:absolute before:rounded-md before:bg-primary/50 hover:before:bg-primary/0 before:border-0 hover:before:border-2 hover:before:border-primary  before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.10] hover:before:scale-y-100 before:transition-transform before:ease-in-out transition-all duration-400 before:duration-400"
                        >
                            <span className="relative">S'inscrire</span>
                        </Link>

                        <Link
                            to="/signin"
                            className="p-1 hover:px-4 text-sm font-medium text-primary relative before:absolute before:rounded-md before:bg-primary/50 hover:before:bg-primary/0 before:border-0 hover:before:border-2 hover:before:border-primary  before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.10] hover:before:scale-y-100 before:transition-transform before:ease-in-out transition-all duration-400 before:duration-400"
                        >
                            <span className="relative">Acceuil</span>
                        </Link>

                    </div>
                </form>
            </Form>
            <Toaster />
        </div >
    )
}

export default OTPverification





