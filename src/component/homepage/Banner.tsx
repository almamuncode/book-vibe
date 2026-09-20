import React from 'react';
import heroImage from "@/assets/hero_img.jpg"
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="container mx-auto px-2 py-10 sm:px-6 lg:px-8">
            <div className="hero rounded-3xl bg-stone-100">
                <div className="hero-content flex-col gap-12 px-6 py-12 lg:flex-row-reverse lg:gap-50 lg:px-12 lg:py-16">
                    <div className="w-full max-w-md">
                        <Image
                            src={heroImage}
                            alt="A collection of books"
                            width={500}
                            className="w-full rounded-2xl object-cover"
                            priority
                        />
                    </div>

                    <div className="max-w-xl text-center lg:text-left">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Find your next read
                        </p>

                        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Books to freshen up
                            <span className="block text-emerald-700">your bookshelf.</span>
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                            Discover books you’ll love, create your reading list, and make every
                            shelf more inspiring.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                            <button className="btn btn-success rounded-full px-7 text-white">
                                View the list
                            </button>
                            <button className="btn btn-ghost rounded-full px-7">
                                Explore books
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;