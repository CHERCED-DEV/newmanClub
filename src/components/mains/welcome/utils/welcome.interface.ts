import { ImgConfig } from "@/pages/api/customCms/database/utils.interface";

export interface WelcomeConfig {
    video: {
        dsk: {
            src: string,
            alert: string
        }
        mob: {
            src: string,
            alert: string
        }
    }
    button: {
        onPlay: ImgConfig,
        onPause: ImgConfig
    }
    join_us: JoinUsConfig;
}

export interface WelcomeDataProps {
    welcome: WelcomeConfig,
}

interface JoinUsConfig {
        message: ImgConfig,
        action: {
            img: ImgConfig,
            span: string
        }
}

export  interface JoinUsDataConfig {
    join_us: JoinUsConfig
}
