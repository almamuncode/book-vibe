import React from 'react';

import Image from "next/image";
import Link from "next/link";

    const BookCard = ({ book }) => {
        const {
            bookId,
            bookName,
            author,
            image,
            totalPages,
            rating,
            category,
            tags,
            yearOfPublishing,
        } = book;

        return (
            <article className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-400">
                <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-52 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-4 sm:w-40">
                        <Image
                            src={image}
                            alt={`Cover of ${bookName}`}
                            width={130}
                            height={190}
                            className="h-full w-auto rounded-md object-contain"
                        />
                    </div>

                    <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium text-emerald-600">{category}</p>
                                <h2 className="mt-1 text-xl font-semibold text-slate-900">
                                    {bookName}
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">By {author}</p>
                            </div>

                            <span className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                                ★ {rating}
                            </span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
                            <span>{totalPages} pages</span>
                            <span>{yearOfPublishing}</span>

                            <Link
                                href={`/books/${bookId}`}
                                className="font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
                            >
                                View details →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        );
    };

export default BookCard;