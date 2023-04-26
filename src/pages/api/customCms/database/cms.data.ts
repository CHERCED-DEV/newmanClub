import { CmsDataConfig } from "./utils.interface";

export const cms: CmsDataConfig = {
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
    welcome: {
        video: {
            dsk: {
                src: "/assets/videos/welcomeDesktop.mp4",
                alert: "Not available",
            },
            mob: {
                src: "/assets/videos/welcomeMobile.mp4",
                alert: "Not available",
            },
        },
        button: {
            onPlay: {
                src: "/assets/logos/mainPlay-video.svg",
                alt: "onPlay",
                width: 48,
                height: 86,
            },
            onPause: {
                src: "/assets/logos/mainPlay-video.svg",
                alt: "onPause",
                width: 48,
                height: 86,
            },
        },
        join_us: {
            message: {
                src: "/assets/logos/comunication-logo.svg",
                alt: "message icon",
                width: 50,
                height: 50,
            },
            action: {
                img: {
                    src: "/assets/logos/favortite-logo.svg",
                    alt: "message icon",
                    width: 53,
                    height: 48,
                },
                span: "Join us"
            }
        }
    },
    events: {
        main_logo: {
            src: "/assets/logos/church-logo.svg",
            alt: "church logo",
            width: 55.27,
            height: 30.22,
        },
        title: "Events",
        cards_events: [
            {
                background_img: {
                    src: "/assets/logos/church-logo.svg",
                    alt: "church logo",
                    width: 55.27,
                    height: 30.22,
                },
                title: "Event 1",
                day: "12",
                month: "June"
            },
            {
                background_img: {
                    src: "/assets/logos/church-logo.svg",
                    alt: "church logo",
                    width: 55.27,
                    height: 30.22,
                },
                title: "Event 2",
                day: "12",
                month: "June"
            },
            {
                background_img: {
                    src: "/assets/logos/church-logo.svg",
                    alt: "church logo",
                    width: 55.27,
                    height: 30.22,
                },
                title: "Event 3",
                day: "12",
                month: "June"
            },
            {
                background_img: {
                    src: "/assets/logos/church-logo.svg",
                    alt: "church logo",
                    width: 55.27,
                    height: 30.22,
                },
                title: "Event 4",
                day: "12",
                month: "June"
            },
        ],
        button: "More events",
        description: "Let's have fun, join us in our events. Find out more here."
    },
    the_crew: {
        title: "The",
        description: [
            "The Catholic community at Trinity participates in the sacramental life of the church and serves actively as a partner in community building and interreligious dialogue to promote understanding and tolerance on campus.",
            "Roman Catholic Campus Ministry is sponsored by the Archdiocese of Hartford Campus Ministry Office and Trinity College’s Office of Spiritual and Religious Life. It brings a vitally important dimension to life at Trinity College."
        ],
        button: "Learn more",
        crew_img: {
            src: "",
            alt: "",
            width: 0,
            height: 0
        },
        group_options: [
            {
                img: {
                    src: "/assets/logos/smileFace-logo.svg",
                    alt: "smileFace",
                    width: 45,
                    height: 45
                },
                users: "165",
                description: "Happy freshman members"
            },
            {
                img: {
                    src: "/assets/logos/twoUser-logo.svg",
                    alt: "twoUserLogo",
                    width: 54,
                    height: 37
                },
                users: "13",
                description: "Wise Senior members"
            },
            {
                img: {
                    src: "/assets/logos/threeUsers-logo.svg",
                    alt: "threeUsers",
                    width: 70,
                    height: 34
                },
                users: "173",
                description: "The whole crew"
            },
        ]
    },
    whats_news: {
        main_logo: {
            src: "/assets/logos/church-logo.svg",
            alt: "church logo",
            width: 55.27,
            height: 30.22,
        },
        title: "What's",
        cards_news: [
            {
                background_img: {
                    src:"/assets/imgs/w-news/pic1.jpg",
                    alt:"pic one",
                    width: 398,
                    height: 528
                },
                date: {
                    day: "12",
                    month: "AUG",
                    year: "2016",
                },
                blog: {
                    author: "Jane St Doe",
                    title: "Finding Hope in Adversity",
                    description: "Join us for a seminar on discovering faith and strength during difficult times.",
                    botton: "See more",
                }
            },
            {
                background_img: {
                    src:"/assets/imgs/w-news/pic2.png",
                    alt:"pic two",
                    width: 398,
                    height: 528
                },
                date: {
                    day: "12",
                    month: "JUN",
                    year: "2019",
                },
                blog: {
                    author: "Jane St Doe",
                    title: "Healing the Soul",
                    description: "Experience emotional healing and inner peace through prayer and reflection.",
                    botton: "See more",
                }
            },
            {
                background_img: {
                    src:"/assets/imgs/w-news/pic3.png",
                    alt:"pic three",
                    width: 398,
                    height: 528
                },
                date: {
                    day: "12",
                    month: "DIC",
                    year: "2016",
                },
                blog: {
                    author: "Jane St Doe",
                    title: "Walking with God",
                    description: "Explore the power of faith and deepen your relationship with God in this seminar.",
                    botton: "See more",
                }
            },
            {
                background_img: {
                    src:"/assets/imgs/w-news/pic4.png",
                    alt:"pic four",
                    width: 398,
                    height: 528
                },
                date: {
                    day: "12",
                    month: "MAY",
                    year: "2016",
                },
                blog: {
                    author: "Jane ST Doe",
                    title: "Living with Purpose",
                    description: "Discover your life's purpose and learn how to align it with your faith in this seminar.",
                    botton: "See more",
                }
            },
        ],
        button: "Find out more", 
    },
    memories: {
        main_logo: {
            src: "/assets/logos/church-logo.svg",
            alt: "church logo",
            width: 55.27,
            height: 30.22,
        },
        basic_cards: [
            {
                src: "/assets/imgs/memories/teamOne-memories.png",
                alt: "nice people meet",
                width: 0,
                height: 0
            },
            {
                src: "/assets/imgs/memories/teamTwo-memories.png",
                alt: "nice people meet",
                width: 0,
                height: 0
            },
            {
                src: "/assets/imgs/memories/teamThree-memories.png",
                alt: "nice people meet",
                width: 0,
                height: 0
            },
            {
                src: "/assets/imgs/memories/teamFour-memories.png",
                alt: "nice people meet",
                width: 0,
                height: 0
            },
            {
                src: "/assets/imgs/memories/teamFive-memories.png",
                alt: "nice people meet",
                width: 0,
                height: 0
            },
            {
                src: "/assets/imgs/memories/teamSix-memories.png",
                alt: "nice people meet",
                width: 0,
                height: 0
            }
        ],
        button: "More memories"
    },
    soundtrack: {
        man: {
            src: "/assets/imgs/banners/happy-man-smiling.png",
            alt: "man listen music",
            width: 1106,
            height: 737 
        },
        title: [
            "Newman",
            "Soundtrack"
        ],
        music_list: {
            src: "",
            alt: "",
            width: 0,
            height: 0 
        }
    },
    join_us: {
        main_title: "Join",
        description: "In the sea of life, there is nothing to fear if you have God as your captain. Join our crew!",
        name: {
            placeholder: "Full Name",
            required: true,
            error: "that field its requiered"
        },
        email: {
            placeholder: "Email Address",
            required: true,
            error: "that field its requiered"
        },
        phone: {
            placeholder: "Cell Phone Number",
            required: true,
            error: "that field its requiered"
        },
        message: {
            placeholder: "Message",
            required: true,
            error: "that field its requiered"
        },
        button: "Sent",
        promo: {
            src: "",
            alt: "",
            width: 0,
            height: 0
        }  
    }
};
