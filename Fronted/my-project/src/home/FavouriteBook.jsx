import React, { useEffect, useState } from 'react'
import BookCards from '../component/BookCards'

const FavouriteBook = () => {
     const [books,setBooks] = useState([])
     useEffect(()=>{
         fetch("http://localhost:4000/allBooks").then(res=>res.json()).then(data=>setBooks(data.slice(0,8)))
     },[])
  return (
    <div>
         <BookCards books={books} headLine="Best Seller Books" />
    </div>
  )
}

export default FavouriteBook

