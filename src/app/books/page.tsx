import React from 'react';
import books from '../../../public/booksData.json';
import BookCard from '@/component/shared/BookCard';

const Books = () => {
    return (
        <section className='container mx-auto my-10'>
            <h1 className='text-3xl font-bold mb-6 text-center'>Explore All BOOKS</h1>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {books.map((book: any) => (
                    <BookCard
                        key={book.bookId}
                        book={book}
                    />
                ))}
            </div>
        </section>
    );
};

export default Books;