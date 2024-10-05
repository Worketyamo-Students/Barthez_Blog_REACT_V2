import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
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
import { Link } from 'react-router-dom';


const UserAvatar: React.FC = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className='border-2 cursor-pointer'>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="py-2 px-2 bg-black/95 text-light">
                    <DropdownMenuLabel className="md:text-xl text-center ">
                        Barthez Kenwou
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuGroup className="mb-7">
                        <DropdownMenuItem>
                            <AiOutlineUser />
                            <Link to={"/:id/profile"}>
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <RxDashboard />
                            <Link to={"/:id/dashboard"}>
                                Dashboard
                            </Link>
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