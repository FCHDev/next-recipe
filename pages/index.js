import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";

export default function Home() {

    const cooking = <Image
        src="/images/cooking.svg"
        alt="cooking chef"
        width={600}
        height={600}
        priority
        className="md:mt-10 mt-28"/>

    return (
        <div className="container mx-auto max-h-screen flex flex-col justify-center items-center">
            <Head>
                <title>Mes recettes gourmandes</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className="text-blue-600 text-center text-5xl mt-5 md:mb-10 mx-0 font-[Lobster] md:block hidden">
                Bienvenue les gourmands !
            </h1>
            <div className="md:px-0 px-3 flex flex-col items-center justify-center">
                <Link href={`./listes`}>
                    {cooking}
                </Link>
                <div className="text-4xl mt-5 font-[Lobster] text-[#f74211] clignote md:hidden">
                    <Link href={`./listes`}>
                        Clique-moi
                    </Link>
                </div>
            </div>
        </div>
    )
}
