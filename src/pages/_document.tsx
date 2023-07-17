import { Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png"/>
                <link rel="android-icon" type="image/png" sizes="192x192"  href="/android-chrome-192x192.png"/>
                <link rel="android-icon" type="image/png" sizes="512x512"  href="/android-chrome-512x512.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                
            </Head>
            <body className='bg-sitebg bg-cover p-4'>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}