import { ImgConfig } from "@/pages/api/customCms/database/utils.interface";

// group options
export interface GroupOptionsDataProps {
  gData: GroupOptionsConfig;
}

export interface MemoriesDataProps {
  memories: MemoriesConfig;
}

export interface GroupOptionsConfig {
  main_logo: ImgConfig;
  title: string;
  description?: string;
  cards: CardsEventsConfig[] | CardsNewsConfig[];
  button: string;
  invite?: string;
}

// memories
export interface CardsConfig {
  cards: CardsEventsConfig[] | CardsNewsConfig[];
}

export interface MemoriesConfig {
  main_logo: ImgConfig;
  title: string,
  cards: ImgConfig[];
  button: string;
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
  };
  blog: {
    author: string;
    title: string;
    description: string;
    botton: string;
  };
}
