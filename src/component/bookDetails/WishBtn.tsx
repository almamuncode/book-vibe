'use client';

import React, { useContext } from 'react';
import { BookContext } from '@/context/BookContext';
import { Ibook } from '../type/type';
import { toast } from 'react-toastify';

const WishBtn = ({ book }: { book: Ibook }) => {
    const booksContext = useContext(BookContext);

    if (!booksContext) {
        throw new Error('WishBtn must be rendered within BookProvider');
    }

    const { wishlist, setWishlist } = booksContext;

    const handleAddToWishlist = () => {
        setWishlist((currentBooks) => [...currentBooks, book]);
        toast.success('Book added to wishlist');
    };

    return (
        <button
            className="btn btn-warning mt-9 rounded-full px-7 text-white"
            onClick={handleAddToWishlist}
        >
            Add to wishlist
        </button>
    );
};

export default WishBtn;