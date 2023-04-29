import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;400;500;700&family=Red+Hat+Display:wght@400;700&display=swap" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;400;500;700&family=Red+Hat+Display:wght@400;700&display=swap" rel="stylesheet" />
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
