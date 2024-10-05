import React from 'react'
import { AiFillLike } from "react-icons/ai";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../ui/avatar"
import { Button } from '../ui/button';

const SingleBlog: React.FC = () => {
    const likeBlog = () => {
        console.log("ajouter un like")
    }
    return (
        <article className='space-y-2'>
            {/* Catégorie du blog */}
            <div className="flex gap-2 items-center">
                <div className='bg-primary/95 px-2 rounded-sm text-sm cursor-default font-medium'>React</div>
                <div className='bg-primary/95 px-2 rounded-sm text-sm cursor-default font-medium'>Shadcn</div>
                <div className='bg-primary/95 px-2 rounded-sm text-sm cursor-default font-medium'>Mongodb</div>
            </div>

            {/* Titre du blog */}
            <h2 className="text-xl md:text-2xl font-semi-bold text-left">
                Le titre de mon Blog ici: Je n'ai pas d'inspiration pour le titre
            </h2>

            <div className=''>
                {/* Contenue du blog */}
                <div className="w-full bg-black/70 rounded-md p-4 flex gap-4 items-start">
                    {/*  Image du blog s'il y'en a*/}
                    <div className="w-[40%] border">
                        <img
                            src="/public/bloc-pg.jpg"
                            alt="image logo"
                            className='w-full h-full cover'
                        />
                    </div>

                    {/* Short contenu */}
                    <div className="w-[60%] flex flex-col gap-2">
                        <div className="trunc_para">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab suscipit quos numquam nulla laborum hic, omnis consectetur doloribus nobis dolore ipsa dolorem, temporibus dolor in necessitatibus? Officiis magnam adipisci nesciunt.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab suscipit quos numquam nulla laborum hic, omnis consectetur doloribus nobis dolore ipsa dolorem, temporibus dolor in necessitatibus? Officiis magnam adipisci nesciunt.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab suscipit quos numquam nulla laborum hic, omnis consectetur doloribus nobis dolore ipsa dolorem, temporibus dolor in necessitatibus? Officiis magnam adipisci nesciunt.
                        </div>
                        {/* Extra */}
                        <div className="flex justify-between items-center">
                            {/* Left */}

                            <div className="flex flex-col">
                                {/* View more btn */}
                                <Button variant={'link'} className='p-0'>Voir plus</Button>

                                {/* Info Like */}
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={likeBlog}
                                    >
                                        <AiFillLike className='text-xl hover:text-primary' />
                                    </button>
                                    <span className="text-sm text-light/80">
                                        5
                                    </span>
                                </div>

                            </div>

                            {/* Info blog and author*/}
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col text-xs text-light/80">
                                    <span className='font-semibold'>Barthez Kenwou</span>
                                    <span>Il y'a un mois</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SingleBlog