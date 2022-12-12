import React from 'react';
import {v4} from "uuid"
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Liste(props) {
    // SVG
    const one = <Image
        src="/images/002numberone.svg"
        alt="numero 1"
        height={15}
        width={15}
        className="svg-sizes"/>
    const two = <Image
        src="/images/016number2.svg"
        alt="numero 2"
        height={15}
        width={15}
        className="svg-sizes"/>
    const three = <Image
        src="/images/017number3.svg"
        alt="numero 3"
        height={15}
        width={15}
        className="svg-sizes"/>
    const four = <Image
        src="/images/031numberfour.svg"
        alt="numero 4"
        height={15}
        width={15}
        className="svg-sizes"/>
    const five = <Image
        src="/images/032number5.svg"
        alt="numero 5"
        height={15}
        width={15}
        className="svg-sizes"/>


    const router = useRouter()

    // function iconAssociated(etape, etapes) {
    //     if(etapes.indexOf(etape) === 0) {
    //
    //     }
    // }


    return (
        <div className="container min-h-screen flex flex-col justify-center items-center mx-auto md:bg-white">
            <h1 className="text-blue-600 md:text-5xl text-4xl text-center md:mt-2 md:mb-5 my-5 mx-0 font-[Kanit]">
                {router.query.liste}
            </h1>

            {props.listeEnCours.map(item => (
                <div className="px-2 md:w-[450px] h-auto flex flex-col justify-center items-center" key={v4()}>
                    <Image
                        src={item.img}
                        // height={400}
                        // width={400}
                        fill
                        priority
                        loading="eager"
                        alt={router.query.liste}
                        className="rounded-xl mb-3 image"/>

                    <div className="text-lg">
                        Temps de préparation : {item.tpsPrepa}
                    </div>
                    <div className="text-lg">
                        Temps de cuisson : {item.tpsCuisson}
                    </div>

                    <div className="mt-5 w-full">
                        <div className="text-2xl mb-3 font-bold">
                            Ingrédients
                        </div>
                        <ul className="text-xl">
                            {item.ingredients.map(ingredient => (
                                <li key={v4()}>
                                    {ingredient.name} {ingredient.qty
                                    ? <em className="text-base"> ({ingredient.qty})</em>
                                : ""}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-5 w-full">
                        <div className="text-2xl mb-3 font-bold">
                            Préparation
                        </div>
                        {item.etapes.map(etape => {
                                return <p
                                    key={v4()}
                                    className="text-xl flex mb-4">
                                    {
                                        etape.etpNbr === 1 ? one : "" ||
                                        etape.etpNbr === 2 ? two : "" ||
                                        etape.etpNbr === 3 ? three : "" ||
                                        etape.etpNbr === 4 ? four : "" ||
                                        etape.etpNbr === 5 ? five : ""
                                    } {etape.etp}
                                </p>
                            }
                        )}
                    </div>

                </div>
            ))}

            <div className="mt-10 text-2xl">
                <Link href={'/listes'}
                      className="font-bold text-[#0070f3] my-7">
                    Back
                </Link>
            </div>

        </div>
    );
};

export async function getStaticProps(context) {
    const slug = context.params.liste
    const data = await import('/assets/data/recettes.json')
    const listeEnCours = data.recettes.find(list => list.name === slug)

    return {
        props: {
            listeEnCours: listeEnCours.data
        }
    }
}

export async function getStaticPaths() {
    const data = await import('/assets/data/recettes.json')
    const paths = data.recettes.map(item => ({
        params: {liste: item.name}
    }))

    return {
        paths,
        fallback: false
    }
}

