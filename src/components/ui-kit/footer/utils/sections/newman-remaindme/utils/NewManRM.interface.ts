import { ImgConfig } from "@/pages/api/customCms/database/utils.interface";

export interface NewManConfig {
    brand_logo: ImgConfig,
    description: string,
}

export interface NewManDataProps {
    newmanRM: NewManConfig;
}