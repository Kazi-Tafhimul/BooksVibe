import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../utils/localDB';

export const BookContext = createContext();


const BookProvider = ({children}) => {
    const [ storedBooks, setStoredBooks] = useState(() => getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());
    // useEffect(() =>{
    //   const getReadListFromLocalDB = getAllReadListFromLocalDB()
    //   setStoredBooks(getReadListFromLocalDB)
    // },[])
    const handleMarkAsRead = (currentBook) =>{
        
        const isExistInWishList = wishList.find((book) => book.bookId === currentBook.bookId);
        const isExistBook = storedBooks.find(book => book.bookId ===currentBook.bookId);
        if(isExistInWishList){
            toast.error("The book is already in wish list")
            return;
        }
        if(isExistBook){
            toast.error("The book is already exist");
        }
        else{
            setStoredBooks([...storedBooks,currentBook])
            toast.success(`${currentBook.bookName} is stored to read list`)
            addReadListToLocalDB(currentBook)
        }



    }
     const handleWishList = (currentBook) =>{
        
        const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId)
        const isExistBook = wishList.find(book => book.bookId === currentBook.bookId);
        if(isExistInReadList){
            toast.error("This book is already in readlist")
            return;
        }

        if(isExistBook){
            toast.error("The book is already exist");
        }
        else{
            setWishList([...wishList,currentBook])
            toast.success(`${currentBook.bookName} is stored to wish list`)
            addWishListToLocalDB(currentBook);
        }



    }
    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    };
    return (
        
            <BookContext.Provider value={data}>{children}</BookContext.Provider>

            
        
    );
};

export default BookProvider;
