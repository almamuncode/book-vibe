'use client';

import React, { useContext } from 'react';
import { BookContext } from '@/context/BookContext';
import { Ibook } from '../type/type';
import { toast } from 'react-toastify';

const ReadBtn = ({ book }: { book: Ibook }) => {

    const booksContext = useContext(BookContext);

    if (!booksContext) {
        throw new Error('ReadBtn must be rendered within BookProvider');
    }

    const { readBooks, setReadBooks } = booksContext;
    

    const handleReadBook = () => {
        setReadBooks((currentBooks) => [...currentBooks, book]);
        toast.success('Book added to reading list');
    };

    return (
        <button
            className="btn btn-success mt-9 rounded-full px-7 text-white"
            onClick={handleReadBook}
        >
            Add to reading list
        </button>
    );
};

export default ReadBtn;