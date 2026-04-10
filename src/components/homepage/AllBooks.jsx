import React, { use } from 'react';

import BooksCard from '../../ui/BooksCard';
const booksPromise = fetch('/booksData.json').then(res=>res.json())

const AllBooks = () => {
    const books = use(booksPromise);
    console.log(books)
    return (
           <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-3xl text-center mb-6'>
                Books
            </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {
                books.map((book,index)=>{
                    return <BooksCard key={index} book={book}/>
                })
            }
          </div>
            
        </div>
    );
};

export default AllBooks;