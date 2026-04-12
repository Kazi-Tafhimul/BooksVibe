import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BooksCard from '../../ui/BooksCard';

const ListedReadList = ({sortingType}) => {
const {storedBooks} = useContext(BookContext);
const [filteredReadList, setfilteredReadList] = useState(storedBooks);
useEffect(() => {
    if(sortingType){
        if(sortingType === 'pages'){
            const sortedData = [...storedBooks].sort((a,b) => a.totalPages - b.totalPages)

            setfilteredReadList(sortedData)
        }
        else if(sortingType === 'ratings'){
            const sortedData = [...storedBooks].sort((a,b) => a.rating - b.rating)
            setfilteredReadList(sortedData)


        }
    }
},[sortingType, storedBooks])
if(filteredReadList.length === 0){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No read list data found</h2>
        </div>
    }
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
             {
                filteredReadList.map((book,index) => <BooksCard key={index} book={book}>
                    
                </BooksCard>)
            }
           </div>
            
        </div>
    );
};

export default ListedReadList;