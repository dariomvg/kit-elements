import { ReactNode } from "react";

export interface PropsCollapse {
    children: ReactNode;
    title?: string;
    bg?: string; 
    width?: string;
}


export interface PropsCarrousel {
    images: string[];
    auto?: boolean ;
    time?:number; 
    width?: string
    height?: string 
}


export interface PropsModal {
    children: ReactNode;
    titleButton: string;
}


export interface PropsToggle {
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void; 
}

