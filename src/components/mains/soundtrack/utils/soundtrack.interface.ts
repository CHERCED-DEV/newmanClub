import { ImgConfig } from "@/pages/api/customCms/database/utils.interface";

export interface SoundtrackConfig {
    man: ImgConfig;
    title: string;
    music_list: ImgConfig;
}

export interface SoundtrackDataProps {
    soundtrack: SoundtrackConfig;
}
