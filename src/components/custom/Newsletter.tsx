import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { useToast } from '../../hooks/use-toast';
import { Toaster } from '../ui/toaster';
import { useState } from 'react';
import { z } from 'zod';

const emailSchema = z
    .string({
        required_error: "l'addresse email est obligatoire !"
    })
    .trim()
    .min(3, {
        message: "Addresse email n'est pas assez long !",
    })
    .max(50, {
        message: "veillez réduire la taille de votre addresse email !"
    })
    .email({
        message: "Format addresse email invalide !"
    });

const Newsletter: React.FC = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);

    const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const useremail = emailSchema.safeParse(email);
        if (!useremail.success) {
            setEmailError(useremail.error.errors[0]?.message);  // Récupère le premier message d'erreur
        } else {
            setEmailError(null);  // Réinitialise l'erreur si la validation réussit

            // Envoyer l'email a la base de données 


            toast({
                description: "souscription réussite !",
            })
        }
    };

    return (
        <section className='max-w-screen-lg w-full container py-14 md:py-20 flex flex-col gap-10 items-center text-center'>
            <h2 className="text-3xl md:text-5xl font-semibold relative after:absolute after:w-2/3 after:h-[2px] after:bg-black/80 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:rounded-full">
                S'inscrire à notre newsletter
            </h2>

            <p className="">
                Voulez-vous être averti lorsqu'un nouveau Blog est ajouté à <b>Universal Blog</b> ?
                Inscrivez-vous à notre lettre d'information et vous serez parmi les premiers
                à découvrir les nouveatés et les mis-à-jour.
            </p>

            <form
                className="min-w-sm max-w-md w-full flex flex-col gap-2"
                onSubmit={sendMail}
            >
                {/* Affichage de l'erreur d'email */}
                {emailError && (
                    <span className="text-destructive text-sm block">
                        {emailError}
                    </span>
                )}
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                        <FaEnvelope className='text-black/50 text-2xl' />
                    </div>

                        <input
                        type="email"
                        placeholder="Entrer votre email ici..."
                        className="group inline-block w-full p-2 py-3 ps-10 text-base font-medium text-secondary border-2 border-black/20 rounded-lg bg-light/90 focus:border-primary/80 outline-none placeholder:text-black/70"
                        name='email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setEmailError(null) }}
                        required
                    />

                    <button type="submit" className="text-light absolute end-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-blue-800 focus:ring focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 ">
                        S'inscrire
                    </button>
                </div>
                <span className="text-sm">
                    En vous inscrivant, vous acceptez les
                    <Link to={"/terms-et-conditions-d-utilisations"} className='text-primary hover:underline'> conditions d'utilisation </Link >
                    et la
                    <Link to={"/terms-et-conditions-d-utilisations"} className='text-primary hover:underline'> politique de confidentialité </Link >
                    de universal Blog.
                </span>
            </form>
            <Toaster />
        </section>
    )
}

export default Newsletter