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
  auto?: boolean;
  time?: number;
  width?: string;
  height?: string;
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
};

export interface PropsExperience {
  experience: ExperienceType;
}

type Link = {
  id: number;
  link: string;
  name: string;
};

export interface BoxLinksTypes {
  links: Link[];
  title: string;
  theme?: "dark" | "light";
  width?: string 
}

export interface ChatTypes {
  children: ReactNode;
  theme?: "dark" | "light";
  width?: string;
  height?: string;
}

export interface MessageTypes {
  content: string;
  theme?: "dark" | "light"; 
  username?: string;
}


