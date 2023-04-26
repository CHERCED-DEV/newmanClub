import { ImgConfig } from "@/pages/api/customCms/database/utils.interface";

interface OptionsHeaderConfig {
    label: string,
    link: string,
}

export interface HeaderConfig {
    newman_logo: ImgConfig,
    options: OptionsHeaderConfig[],
    about: {
        church_name: string,
        social_Logo: ImgConfig[],
    },
    menu_mobile: ImgConfig
}

export interface HeaderDataProps {
    header: HeaderConfig;
}