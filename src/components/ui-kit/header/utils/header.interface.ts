import { ImgConfig } from "@/pages/api/customCms/models/utils.interface";

export interface HeaderConfig {
    newman_logo: ImgConfig,
    options: string[],
    about: {
        church_name: string,
        social_one: ImgConfig,
        social_two: ImgConfig,
    }
}

export interface HeaderDataProps {
    header: HeaderConfig;
}