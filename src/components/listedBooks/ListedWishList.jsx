import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BooksCard from '../../ui/BooksCard';

const ListedWishList = ({sortingType}) => {
    const {wishList} = useContext(BookContext);
    const [filteredWishList, setfilteredWishList] = useState(wishList);
    useEffect(() => {
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedData = [...wishList].sort((a,b) => a.totalPages - b.totalPages)
    
                setfilteredWishList(sortedData)
            }
            else if(sortingType === 'ratings'){
                const sortedData = [...wishList].sort((a,b) => a.rating - b.rating)
                setfilteredWishList(sortedData)
    
    
            }
        }
    },[sortingType, wishList])
    if(filteredWishList.length === 0){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No wish list data found</h2>
        </div>
    }
    return (
        <div>
            <div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
             {
                filteredWishList.map((book,index) => <BooksCard key={index} book={book}>
                    
                </BooksCard>)
            }
           </div>
            
        </div>
            
        </div>
    );
};

export default ListedWishList;