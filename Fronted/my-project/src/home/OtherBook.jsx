import React from 'react'
import { useState,useEffect } from 'react'
import BookCards from '../component/BookCards'
const OtherBook = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/allBooks").then(res=>res.json()).then(data=>setBooks(data.slice(0,8)))
    },[])
 return (
   <div>
        <BookCards books={books} headLine="Other Book`s" />
   </div>
 )
}

export default OtherBook
