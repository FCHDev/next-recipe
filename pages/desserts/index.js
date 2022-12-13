import React from 'react';
import {v4} from "uuid"
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Index = (props) => {

    return (
        <div>
            <Head>
                <title>Liste des recettes</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h1 className="hidden md:block text-blue-600 text-center text-5xl mt-5 mb-10 mx-0 md:pl-3 font-[Lobster]">
                Desserts
            </h1>


            <div className="flex flex-wrap w-full md:w-3/4 md:mx-auto justify-evenly mt-5 md:mt-0">
                {props.array.map(item => (
                    <Link key={v4()} href={`./listes/${item.name}`}
                          className="md:h-auto md:w-[300px] w-2/5 flex flex-col list-none md:text-xl text-sm text-gray-800 text-center md:mx-1 md:mb-8 mb-4 font-[Prompt] items-center relative">
                        <Image
                            src={item.img}
                            alt={item.name}
                            // width={400}
                            // height={400}
                            fill
                            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                            className="rounded-xl image"
                            loading="eager"
                            priority
                        />

                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}

                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Index;

export async function getStaticProps() {
    const data = await import('../../assets/data/recettes.json')
    const array = data.recettes.filter(recette => recette.type === "dessert");

    console.log(array)

    return {
        props: {array}
    }
}