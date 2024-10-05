import { BsFacebook } from "react-icons/bs"; 
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { IContactLink, ITablinks } from "../interface/interface";

export const tablinks: ITablinks[] = [
    {
        id: 1,
        target: 'Home',
        href: '/home'
    },

    {
        id: 2,
        target: 'Blog',
        href: '/blogs'
    },

    {
        id: 3,
        target: 'Chat',
        href: '/chat'
    },
]

export const contactLink: IContactLink[]  = [
    {
        id: 1,
        target: <AiOutlineGithub />,
        href: 'https://github.com/Worketyamo-Students/Barthez_Blog_REACT_V2'
    },

    {
        id: 2,
        target: <AiFillLinkedin />,
        href: ''
    },

    {
        id: 3,
        target: <BsFacebook />,
        href: ''
    },
]

