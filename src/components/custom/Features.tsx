import { MdHealthAndSafety } from "react-icons/md"; 
import { MdBusinessCenter } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { CgDigitalocean } from "react-icons/cg";
import { GrGrow } from "react-icons/gr";
import { GiAirplaneDeparture } from "react-icons/gi";
import { AiOutlineRight } from "react-icons/ai";
import React from 'react'
import { Link } from 'react-router-dom'

const Features: React.FC = () => {
    return (
        <>
            <section className='w-full container py-14 flex flex-col gap-10 items-center text-center'>
                <h2 className="text-3xl md:text-5xl font-semibold relative after:absolute after:w-2/3 after:h-[2px] after:bg-black/80 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:rounded-full">
                    Sujets De Blog
                </h2>

                <p className="max-w-screen-md">
                    Explorez nos sujets de blog les plus populaires et trouvez des conseils pratiques, des idées inspirantes et des informations pertinentes dans les domaines qui vous intéressent le plus.                </p>

                <div className=" mx-auto justify-center gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {/* Numero 1 */}
                    <Link
                        to={"/blogs/categorie/12"}
                        className="group flex flex-col rounded-md gap-4 border bg-white hover:shadow hover:shadow-primary/20 p-4"
                    >
                        <MdHealthAndSafety className="h-10 w-10 fill-primary" />
                        <div className="space-y-1 text-left">
                            <h3 className="font-bold text-xl">
                                Santé & Bien-être
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Explorez des conseils pour adopter un mode de vie plus sain, améliorer votre bien-être physique et mental, et découvrir les dernières avancées en matière de santé.
                            </p>
                        </div>
                        <Link
                            to={"/blogs/categorie/12"}
                            className="text-primary flex items-center font-medium gap-1 group-hover:gap-2 duration-300"
                        >
                            En savoir plus sur la santé
                            <AiOutlineRight className="font-bold" />
                        </Link>
                    </Link>

                    {/* Numero 2 */}
                    <Link
                        to={"/blogs/categorie/12"}
                        className="group flex flex-col rounded-md gap-4 border bg-white hover:shadow hover:shadow-primary/20 p-4"
                    >
                        <GiAirplaneDeparture className="h-10 w-10 fill-primary" />
                        <div className="space-y-1 text-left">
                            <h3 className="font-bold text-xl">Voyage & Aventure</h3>
                            <p className="text-sm text-muted-foreground">
                                Partez à la découverte des plus belles destinations et obtenez des astuces pour préparer vos voyages et vivre des aventures inoubliables.                            </p>
                        </div>
                        <Link
                            to={"/blogs/categorie/12"}
                            className="text-primary flex items-center font-medium gap-1 group-hover:gap-2 duration-300"
                        >
                            Voir les articles voyage
                            <AiOutlineRight className="font-bold" />
                        </Link>
                    </Link>

                    {/* Numero 3 */}
                    <Link
                        to={"/blogs/categorie/12"}
                        className="group flex flex-col rounded-md gap-4 border bg-white hover:shadow hover:shadow-primary/20 p-4"
                    >
                        <MdBusinessCenter className="h-10 w-10 fill-primary" />
                        <div className="space-y-1 text-left">
                            <h3 className="font-bold text-xl">
                                Entrepreneuriat & Startups
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Découvrez les meilleures stratégies pour lancer et développer votre propre entreprise. Obtenez des conseils d'experts sur le financement, le marketing et la gestion d'une startup
                            </p>
                        </div>
                        <Link
                            to={"/blogs/categorie/12"}
                            className="text-primary flex items-center font-medium gap-1 group-hover:gap-2 duration-300"
                        >
                            Voir les articles sur l'entrepreneuriat
                            <AiOutlineRight className="font-bold" />
                        </Link>
                    </Link>

                    {/* Numero 4 */}
                    <Link
                        to={"/blogs/categorie/12"}
                        className="group flex flex-col rounded-md gap-4 border bg-white hover:shadow hover:shadow-primary/20 p-4"
                    >
                        <MdComputer className="h-10 w-10 fill-primary" />
                        <div className="space-y-1 text-left">
                            <h3 className="font-bold text-xl">
                                Technologie & Innovation
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Restez à jour avec les dernières tendances technologiques et les innovations qui transforment notre quotidien, de l'intelligence artificielle à la blockchain.
                            </p>
                        </div>
                        <Link
                            to={"/blogs/categorie/12"}
                            className="text-primary flex items-center font-medium gap-1 group-hover:gap-2 duration-300"
                        >
                            Explorer la technologie
                            <AiOutlineRight className="font-bold" />
                        </Link>
                    </Link>

                    {/* Numero 5 */}
                    <Link
                        to={"/blogs/categorie/12"}
                        className="group flex flex-col rounded-md gap-4 border bg-white hover:shadow hover:shadow-primary/20 p-4"
                    >
                        <CgDigitalocean className="h-10 w-10 fill-primary" />
                        <div className="space-y-1 text-left">
                            <h3 className="font-bold text-xl">
                                Marketing Digital & Réseaux Sociaux
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                Apprenez comment utiliser le marketing numérique et les réseaux sociaux pour atteindre votre public, améliorer votre visibilité en ligne, et booster vos ventes.
                            </p>
                        </div>
                        <Link
                            to={"/blogs/categorie/12"}
                            className="text-primary flex items-center font-medium gap-1 group-hover:gap-2 duration-300"
                        >
                            Découvrir le marketing digital
                            <AiOutlineRight className="font-bold" />
                        </Link>
                    </Link>

                    {/* Numero 6 */}
                    <Link
                        to={"/blogs/categorie/12"}
                        className="group flex flex-col rounded-md gap-4 border bg-white hover:shadow hover:shadow-primary/20 p-4"
                    >
                        <GrGrow className="h-10 w-10 fill-primary" />
                        <div className="space-y-1 text-left">
                            <h3 className="font-bold text-xl">
                                Développement Personnel & Productivité
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Améliorez vos compétences personnelles et professionnelles grâce à des techniques de productivité, de gestion du temps, et de développement de carrière.
                            </p>
                        </div>
                        <Link
                            to={"/blogs/categorie/12"}
                            className="text-primary flex items-center font-medium gap-1 group-hover:gap-2 duration-300"
                        >
                            Lire sur le développement personnel
                            <AiOutlineRight className="font-bold" />
                        </Link>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Features