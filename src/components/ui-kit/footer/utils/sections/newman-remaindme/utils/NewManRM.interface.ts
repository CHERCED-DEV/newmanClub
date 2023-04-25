import { ImgConfig } from "@/pages/api/customCms/models/utils.interface";

export interface NewManConfig {
    brand_logo: ImgConfig,
    description: string,
}

export interface NewManDataProps {
    newmanRM: NewManConfig;
}