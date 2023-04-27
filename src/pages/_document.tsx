import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link rel="preload" as="font" href="/fonts/Lato/Lato-Regular.ttf" type="font/ttf" crossOrigin="anonymous" />
                <link rel="preload" as="font" href="/fonts/Poppins/Poppins-Bold.ttf" type="font/ttf" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;400;500;700&family=Red+Hat+Display:wght@400;700&display=swap" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;400;500;700&family=Red+Hat+Display:wght@400;700&display=swap" rel="stylesheet"/>
                <link
                    rel="preload"
                    href="/fonts/Lato/Lato-Regular.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Lato/Lato-Bold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Lato/Lato-Black.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Lato/Lato-Regular.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                    media="print"
                />
                <link
                    rel="preload"
                    href="/fonts/Lato/Lato-Bold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                    media="print"
                />

                <link rel="icon" href="/assets/icons/church-logo.svg" />
                <link rel="mask-icon" href="@Model.MaskIcon" color="#245086" />
                <meta name="msapplication-TileColor" content="#245086" />
                <meta name="theme-color" content="#245086" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
