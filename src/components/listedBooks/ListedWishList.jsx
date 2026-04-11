import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BooksCard from '../../ui/BooksCard';

const ListedWishList = () => {
    const {wishList} = useContext(BookContext);
    if(wishList.length === 0){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No wish list data found</h2>
        </div>
    }
    return (
        <div>
            <div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
             {
                wishList.map((book,index) => <BooksCard key={index} book={book}>
                    
                </BooksCard>)
            }
           </div>
            
        </div>
            
        </div>
    );
};

export default ListedWishList;