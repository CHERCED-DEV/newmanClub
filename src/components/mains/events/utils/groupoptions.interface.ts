import { ImgConfig } from "@/pages/api/customCms/database/utils.interface";

export interface GroupOptionsDataProps {
    gData: GroupOptionsConfig;
}

export interface GroupOptionsConfig {
    main_logo: ImgConfig;
    description?: string;
    title: string;
    cards: CardsEventsConfig[] | CardsNewsConfig[];
    button: string;
    invite?: string;
}

// cards config 

export interface CardDataProps {
    card: CardsEventsConfig | CardsNewsConfig;
}

export interface CardsEventsConfig {
    background_img: ImgConfig;
    title: string;
    day: string;
    month: string;
}

export interface CardsNewsConfig {
    background_img: ImgConfig;
    date: {
        day: string;
        month: string;
        year: string;
    }
    blog: {
        author: string,
        title: string,
        botton: string;
    }
}