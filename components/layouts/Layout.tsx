import Head from "next/head"
import { Navbar } from "../ui";

interface Props {
    children: React.ReactNode;
    title?: string;
}

const origin = ( typeof window === 'undefined') ? '' : window.location.origin;

export const Layout = ({children, title}: Props) => {

    
    
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Nahuel Clotet'/>
            <meta name='description' content='Pokemon App'/>
            <meta name='keywords' content={`${title}, pokemon, react, next, nextjs`}/>

            <meta property="og:title" content={`Information about ${title}`} />
<meta property="og:description" content={`This is the page about ${title}`} />
<meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar />
        
        <main
            style={{
                padding: '0 1rem',
            }}
        >
            {children}
        </main>
    </>
  )
}
