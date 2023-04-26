import { JoinUsConfig } from "@/components/mains/JoinUsNewMan/utils/joinus.interface";
import { GroupOptionsConfig, MemoriesConfig } from "@/components/mains/group-options/utils/groupoptions.interface";
import { SoundtrackConfig } from "@/components/mains/soundtrack/utils/soundtrack.interface";
import { TheCrewConfig } from "@/components/mains/the-crew/utils/thecrew.interface";
import { WelcomeConfig } from "@/components/mains/welcome/utils/welcome.interface";
import { LayoutCmsConfig } from "@/components/ui-kit/utils/layout.interface";

export interface ImgConfig {
    src: string,
    alt: string,
    fill?: boolean,
    width: number,
    height: number,
}

export interface ReactComponentConfig {
    children: JSX.Element | JSX.Element[];
}

export interface CmsDataConfig {
    layout: LayoutCmsConfig;
    welcome: WelcomeConfig;
    events: GroupOptionsConfig;
    the_crew: TheCrewConfig;
    whats_news: GroupOptionsConfig;
    memories: MemoriesConfig;
    soundtrack: SoundtrackConfig;
    join_us: JoinUsConfig;
}