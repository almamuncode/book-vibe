import Image from 'next/image';
import React from 'react';
import WishBtn from '@/component/bookDetails/WishBtn';
import ReadBtn from '@/component/bookDetails/ReadBtn';


const getBook = async (id: string) => {
    // Fetch book details from an API or database using the id
    const response = await fetch(`http://localhost:3000/booksData.json`);
    const book = await response.json();
    return book;
};


const BookDetailPage = async ({ params }: { params: { id: string } }) => {

    const { id } = await params;
    const bookData = await getBook(id);
    const book = bookData.find((b: { bookId: string }) => String(b.bookId) === String(id));


    return (


        <div className="container mx-auto px-4 py-10 sm:px-6 lg:py-16">
            {book ? (
                <section className="grid gap-10 rounded-3xl bg-stone-100 p-6 sm:p-10 lg:grid-cols-[300px_1fr] lg:gap-14 lg:p-14">
                    <div className="flex items-start justify-center rounded-2xl bg-white p-6">
                        <Image
                            src={book.image}
                            alt={`Cover of ${book.bookName}`}
                            width={240}
                            height={360}
                            className="h-auto max-h-[360px] w-auto rounded-lg object-contain"
                            priority
                        />
                    </div>

                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                                {book.category}
                            </span>
                            <span className="text-sm font-medium text-amber-600">
                                ★ {book.rating} rating
                            </span>
                        </div>

                        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                            {book.bookName}
                        </h1>

                        <p className="mt-3 text-lg text-slate-600">
                            By <span className="font-medium text-slate-800">{book.author}</span>
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {book.tags?.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="my-8 h-px bg-slate-300" />

                        <h2 className="text-lg font-semibold text-slate-900">About this book</h2>
                        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                            {book.review}
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-300 pt-6 sm:grid-cols-4">
                            <div>
                                <p className="text-sm text-slate-500">Pages</p>
                                <p className="mt-1 font-semibold text-slate-800">{book.totalPages}</p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Published</p>
                                <p className="mt-1 font-semibold text-slate-800">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Publisher</p>
                                <p className="mt-1 font-semibold text-slate-800">{book.publisher}</p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Book ID</p>
                                <p className="mt-1 font-semibold text-slate-800">#{book.bookId}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <ReadBtn book={book} />
                            <WishBtn book={book} />
                        </div>
                    </div>
                </section>
            ) : (
                <p className="py-20 text-center text-slate-500">Book not found.</p>
            )}
        </div>
    );
};

export default BookDetailPage;