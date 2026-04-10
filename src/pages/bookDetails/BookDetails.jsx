import React, { use } from 'react';
import { useParams } from 'react-router';
const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
    const {id} = useParams();
    const books = use(booksPromise);
    const expectedBook = books.find((book) => book.bookId == id);
    const {bookId, author, bookName, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = expectedBook;

    return (
       <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto">
  <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl'>
    <img
      src={image}
      alt="Album" 
      className='h-[400px]'/>
      
      
  </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <h2 className="card-title">By:{author}</h2>
    <p className='py-2 border-y'>{category}</p>
    <p>Review:{review}</p>
     <div className='flex items-center gap-2'>
        {
            tags.map((tag,index)=>(

            <div key={index} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
        ))
        }
   

    </div>
    <div className="border-t space-y-3">
        <div className='flex justify-between items-center gap-2'>
            <span>

            Number of pages:
            </span>
            <span>{totalPages}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>

            Publisher:
            </span>
            <span>{publisher}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>

            Publishing time:
            </span>
            <span>{yearOfPublishing}</span>
        </div>
        <div className='flex items-center gap-2'>
            
      <button className="btn btn-primary">Read</button>
      <button className="btn btn-primary">Wish list</button>
        </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;