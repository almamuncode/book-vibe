'use client';

import { useContext } from 'react';
import { BookContext } from '@/context/BookContext';
import ListedBookCard from '@/component/shared/ListedBookCard';


const ListedBooksPage = () => {
    const booksContext = useContext(BookContext);

    if (!booksContext) {
        throw new Error('ListedBooksPage must be rendered within BookProvider');
    }

    const { readBooks, wishlist } = booksContext;

    return (
        <div className="container mx-auto px-4 py-10 sm:px-6">
            <div className="tabs tabs-lift">
                <input
                    type="radio"
                    name="book-lists"
                    className="tab"
                    aria-label="Reading List"
                    defaultChecked
                />
                <div className="tab-content border-base-300 bg-base-100 p-6">
                    <h2 className="mb-6 text-2xl font-semibold text-slate-900">
                        Reading List ({readBooks.length})
                    </h2>

                    <div className="space-y-4">
                        {readBooks.length ? (
                            readBooks.map((book) => (
                                <ListedBookCard
                                    key={book.bookId}
                                    book={book}
                                    listType="Reading List"
                                />
                            ))
                        ) : (
                            <p className="py-10 text-center text-slate-500">
                                Your reading list is empty.
                            </p>
                        )}
                    </div>
                </div>

                <input
                    type="radio"
                    name="book-lists"
                    className="tab"
                    aria-label="Wishlist"
                />
                <div className="tab-content border-base-300 bg-base-100 p-6">
                    <h2 className="mb-6 text-2xl font-semibold text-slate-900">
                        Wishlist ({wishlist.length})
                    </h2>

                    <div className="space-y-4">
                        {wishlist.length ? (
                            wishlist.map((book) => (
                                <ListedBookCard key={book.bookId} book={book} listType="Wishlist" />
                            ))
                        ) : (
                            <p className="py-10 text-center text-slate-500">
                                Your wishlist is empty.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksPage;