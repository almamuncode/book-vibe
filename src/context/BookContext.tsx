'use client';

import React, { createContext, useState } from 'react';
import { Ibook } from '@/component/type/type';

type BookContextValue = {
    readBooks: Ibook[];
    setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
    wishlist: Ibook[];
    setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>;
};

const BookContext = createContext<BookContextValue | null>(null);

const BookProvider = ({ children }: { children: React.ReactNode }) => {

    const [readBooks, setReadBooks] = useState<Ibook[]>([]);
    const [wishlist, setWishlist] = useState<Ibook[]>([]);

    const sharedBooks ={
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }

    return (
        <BookContext.Provider value={sharedBooks}>
            {children}
        </BookContext.Provider>
    );
};

export { BookContext };
export default BookProvider;