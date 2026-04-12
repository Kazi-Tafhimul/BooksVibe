const getAllReadListFromLocalDB = () =>{
    const allReadList = localStorage.getItem("readList");
    if(allReadList){
        return JSON.parse(allReadList);
    }
    else{
        return [];
    }


}

const addReadListToLocalDB = (book) =>{
    const allBooks = getAllReadListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);
    
   if(!isAlreadyExist){
        allBooks.push(book)
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }




}
const getAllWishListFromLocalDB = () =>{
    const allWishList = localStorage.getItem("wishlist");
    if(allWishList){
        return JSON.parse(allWishList)
    }
    else{
        return [];
    }
}
const addWishListToLocalDB = (book) =>{
    const allBooks = getAllWishListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);
    if(!isAlreadyExist){
        allBooks.push(book);
        localStorage.setItem("wishlist", JSON.stringify(allBooks))
    }
}

export {getAllReadListFromLocalDB, addReadListToLocalDB, getAllWishListFromLocalDB, addWishListToLocalDB}