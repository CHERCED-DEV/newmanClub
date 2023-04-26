import { ImgConfig } from "@/pages/api/customCms/database/utils.interface";

export interface JoinUsConfig {
    main_title: string;
    description: string;
    name: {
        placeholder: string;
        required: boolean;
        error: string;
    },
    email: {
        placeholder: string;
        required: boolean;
        error: string;
    },
    phone: {
        placeholder: string;
        required: boolean;
        error: string;
    },
    message: {
        placeholder: string;
        required: boolean;
        error: string;
    }
    button: string;
    promo: ImgConfig;
}

export interface JoinUsDataProps {
    join_us: JoinUsConfig;
}