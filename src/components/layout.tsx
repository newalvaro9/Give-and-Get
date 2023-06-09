import Head from 'next/head'
import Navbar from './navbar'

//Main page /...
export default function Layout({ children, title, setSearchQuery }: { children: React.ReactNode, title?: string, setSearchQuery?: Function }) {
    return (
        <>
            <Head>
                <title>{title ? title : "Give & Get"}</title>
                <meta name="description" content="Give your time helping others & Get some help from others" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            <Navbar setSearchQuery={setSearchQuery} />
            <div className='container-center-page'>
                {children}
            </div>
        </>
    )
}