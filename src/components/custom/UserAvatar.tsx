import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import React from 'react'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"


const UserAvatar: React.FC = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <button
                        className='border-2 rounded-full'

                    >
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn" 
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="py-2 px-2 bg-black/70 text-light">
                    <DropdownMenuLabel className="md:text-xl text-center ">
                        Barthez Kenwou
                        </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuGroup className="mb-7">
                        <DropdownMenuItem>
                            <AiOutlineUser />
                            <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <RxDashboard />
                            <span>Dashboard</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <BiLogOut />
                            Deconnexion
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

        </>

    )
}

export default UserAvatar