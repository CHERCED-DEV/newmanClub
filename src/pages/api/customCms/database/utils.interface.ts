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
}