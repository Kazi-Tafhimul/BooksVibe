import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {
     const {storedBooks, wishList} = useContext(BookContext);
     console.log(storedBooks, wishList)
    return (
        <div>
            
        </div>
    );
};

export default Books;