import React from 'react'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../ui/avatar"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu"
  

const UserAvatar: React.FC = () => {
    return (
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
    )
}

export default UserAvatar