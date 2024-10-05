import React from "react";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
}
export interface IContactLink {
    id: number;
    target: JSX.Element;
    href: string;
};

export interface ITablinks {
    id: number;
    target: string;
    href: string;
};