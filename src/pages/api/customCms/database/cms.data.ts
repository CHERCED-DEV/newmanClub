import { LayoutCmsConfig } from "@/components/ui-kit/utils/layout.interface";

export const cms: { [key: string]: LayoutCmsConfig } = {
    layout: {
        header: {
            newman_logo: {
                src: "/assets/logos/newman-White.svg",
                alt: "newman club",
                width: 195,
                height: 87.1,
            },
            options: [
                {
                    link: "/",
                    label: "Home",
                },
                {
                    link: "/",
                    label: "The crew",
                },
                {
                    link: "/",
                    label: "Events",
                },
                {
                    link: "/",
                    label: "Whats new",
                },
                {
                    link: "/",
                    label: "Virtual office",
                },
                {
                    link: "/",
                    label: "Contact",
                },
            ],
            about: {
                church_name: "Maria Reina Parish",
                social_Logo: [
                    {
                        src: "/assets/logos/instagram-logo.svg",
                        alt: "instagram",
                        width: 44,
                        height: 46,
                    },
                    {
                        src: "/assets/logos/facebook-logo.svg",
                        alt: "facebook",
                        width: 44,
                        height: 46,
                    },
                ],
            },
            menu_mobile: {
                src: "/assets/logos/church-logo.svg",
                alt: "church",
                width: 195,
                height: 87.1,
            },
        },
        footer: {
            newmanRm: {
                brand_logo: {
                    src: "/assets/logos/newman-White.svg",
                    alt: "newman club",
                    width: 172,
                    height: 78,
                },
                description:
                    "Follow us on our social networks and don't miss our latest news and events.",
            },
            contactMe: {
                channels: [
                    {
                        img: {
                            src: "/assets/logos/telephone-logo.svg",
                            alt: "phone",
                            width: 30,
                            height: 30,
                        },
                        label: "+57 (322) 374 6739",
                    },
                    {
                        img: {
                            src: "/assets/logos/mailito-logo.svg",
                            alt: "email",
                            width: 30,
                            height: 30,
                        },
                        label: "servicio@lurdes.co",
                    },
                ],
                social_media: [
                    {
                        src: "/assets/logos/instagram-logo.svg",
                        alt: "instagram",
                        width: 50,
                        height: 50,
                    },
                    {
                        src: "/assets/logos/facebook-logo.svg",
                        alt: "facebook",
                        width: 50,
                        height: 50,
                    },
                ],
            },
            newsletter: {
                title: "SUBSCRIBE TO OUR NEWSLETTER!",
                form: {
                    placeholder: "Your email",
                    submit: "Send",
                },
            },
            copyRight: {
                terms: "Terms & Conditions | Privacy Policy",
                powered_by:
                    "© Copyright 2020 - 2021 Ingenuity & Solutions LLC All Rights Reserved.",
            },
        },
    },
};
