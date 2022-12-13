import React from 'react';
// import {create} from "../../components/users-repo"

const Index = () => {
    return (
        <div className="container w-full min-h-screen flex flex-col items-center mx-auto md:bg-white">
            <h1 className="hidden md:block text-blue-600 text-center text-5xl mt-5 mb-10 mx-0 font-[Lobster]">
                Admin page
            </h1>

            <button className="button-main">
                Create User
            </button>

            {/*FORM*/}
            <div className="w-2/3 mb-10">
                <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200">
                        <div>
                            {/*NOM DE LA RECETTE*/}
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-6">
                                    <label htmlFor="recipe-name" className="block text-sm font-medium text-gray-700">
                                        Nom de la recette
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="recipe-name"
                                            id="recipe-name"
                                            autoComplete="recipe-name"
                                            className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                {/*IMAGE DE LA RECETTE*/}
                                <div className="sm:col-span-6">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                                        Photo
                                    </label>
                                    <div
                                        className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-medium text-[#0070f3] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#0070f3] focus-within:ring-offset-2"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file"
                                                           className="sr-only"/>
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Préparation et Ingrédients
                                </h3>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                {/*TYPE RECETTE*/}
                                <div className="sm:col-span-2">
                                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                        Type de recette
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="type"
                                            name="type"
                                            autoComplete="type-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option>Plat</option>
                                            <option>Soupe</option>
                                            <option>Dessert</option>
                                        </select>
                                    </div>
                                </div>

                                {/*TEMPS PREPA ET CUISSON*/}
                                <div className="sm:col-span-2">
                                    <label htmlFor="tpsPrepa" className="block text-sm font-medium text-gray-700">
                                        Temps de préparation
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="tpsPrepa"
                                            id="tpsPrepa"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Temps de cuisson
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="tpsCuisson"
                                            id="tpsCuisson"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                {/*INGREDIENTS ET QUANTITES*/}
                                <div className="sm:col-span-4">
                                    <label htmlFor="tpsPrepa" className="block text-sm font-medium text-gray-700">
                                        Ingrédient
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="ingredients-name"
                                            id="ingredients-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Quantités
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="ingredients-qty"
                                            id="ingredients-qty"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="tpsPrepa" className="block text-sm font-medium text-gray-700">
                                        Ingrédient
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="ingredients-name"
                                            id="ingredients-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Quantités
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="ingredients-qty"
                                            id="ingredients-qty"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="tpsPrepa" className="block text-sm font-medium text-gray-700">
                                        Ingrédient
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="ingredients-name"
                                            id="ingredients-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Quantités
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="ingredients-qty"
                                            id="ingredients-qty"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="tpsPrepa" className="block text-sm font-medium text-gray-700">
                                        Ingrédient
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="ingredients-name"
                                            id="ingredients-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Quantités
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="ingredients-qty"
                                            id="ingredients-qty"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="pt-8">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Étapes de préparation
                                </h3>
                            </div>
                            <div className="mt-6">
                                {/*ETAPE*/}
                                <div className="sm:col-span-6">
                                    <label htmlFor="tpsPrepa" className="block text-sm font-medium text-gray-700">
                                        Étape 1
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-3"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>

                                {/*ETAPE*/}
                                <div className="sm:col-span-6">
                                    <label htmlFor="tpsPrepa" className="block text-sm font-medium text-gray-700">
                                        Étape 2
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-3"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>

                                {/*ETAPE*/}
                                <div className="sm:col-span-6">
                                    <label htmlFor="tpsPrepa" className="block text-sm font-medium text-gray-700">
                                        Étape 3
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-3"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>

                                {/*ETAPE*/}
                                <div className="sm:col-span-6">
                                    <label htmlFor="tpsPrepa" className="block text-sm font-medium text-gray-700">
                                        Étape 4
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-3"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-[#0070f3] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#0070f3] focus:outline-none focus:ring-2 focus:ring-[#0070f3] focus:ring-offset-2"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Index;