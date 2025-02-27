import { ReactNode } from "react";

export interface PropsCollapse {
    children: ReactNode;
    title?: string;
    bg?: string; 
    width?: string;
}

type StaticImageData = {
    src: string;
    width: number;
    height: number;
    blurDataURL?: string;
};

export interface PropsCarrousel {
    images: StaticImageData[];
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

type ExperienceType = {
    job_name: string; 
    company: string; 
    first_date: string; 
    last_date: string; 
    description: string; 
    link?: string; 
    theme?: string; 
}

export interface PropsExperience {
    experience: ExperienceType

}
