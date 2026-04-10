import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BooksCard = ({book}) => {
    return (
        
        <div className="card bg-base-100  shadow-sm">
  <figure className='p-6 '>
    <img
      src={book.image}
      alt={book.bookName} className='rounded-xl h-[250px]' />
  </figure>
  <div className="card-body">
    <div className='flex items-center gap-2'>
        {
            book.tags.map((tag,index)=>(

            <div key={index} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
        ))
        }
   

    </div>
    <h2 className="card-title">
      <h2 className='font-bold text-xl'>{book.bookName}</h2>
    </h2>
    <p className='font-semibold text-lg'>{book.author}</p>
    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
      <div className="font-semibold">{book.category}</div>
      <div className="font-semibold flex gap-2 items-center">{book.rating}<FaRegStar/></div>
    </div>
  </div>
</div>
            
        
    );
};

export default BooksCard;