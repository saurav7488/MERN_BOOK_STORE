import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBooks = () => {
  const { id } = useParams()
  const { bookTitle, authorName, imageUrl,
    category, bookDescription, bookPdfUrl } = useLoaderData()
  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Miscellaneous",
    "Mystery",
    "Romance",
    "Dramatic",
    "Sci-Fi",
    "Entertaiment",
    "History",
    "Other"
  ]
  const [selectBook, setSelectBook] = useState(bookCategory[0])
  const handleChange = (event) => {
    // console.log(event.target.value)
    // e.preventDefault()
    setSelectBook(event.target.value)
  }
  // handle change 
  const handleUpdate = (event) => {
    event.preventDefault()
    const form = event.target;
    const bookTitle = form.bookTitle.value
    const authorName = form.authorName.value
    const imageUrl = form.imageUrl.value
    const category = form.category.value
    const bookDescription = form.bookDescription.value
    const bookPdfUrl = form.bookPdfUrl.value

    const bookObj = {
      bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl
    }

    fetch(`http://localhost:4000/book/${id}`,{
       method:"PATCH",
       headers:{
          "Content-Type":"application/json"
       },
       body:JSON.stringify(bookObj)
    }).then(res=>res.json()).then(data=>{
           alert("Book is Updated Successfully!!!")
          // form.reset()
    })
    
  }
  return (
    <div className='px-4 my-12 mb-5' >
      <h2 className='mb-h text-3xl font-bold px-5' >Update The Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8 w-3/4 ' >
          <div className='lg:w-1/2 ' >
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput  defaultValue={bookTitle} id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
          </div>
          {/* Author name */}
          <div className='lg:w-1/2 ' >
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput  defaultValue={authorName} id="authorName" name='authorName' type="text" placeholder="Author Name" required />
          </div>

        </div>
        {/* second row */}
        <div className='flex gap-8 w-3/4 ' >
          <div className='lg:w-1/2 ' >
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image Url" />
            </div>
            <TextInput  defaultValue={imageUrl} id="imageUrl" name='imageUrl' type="text" placeholder="Book Image Url" required />
          </div>
          {/* category */}
          <div className='lg:w-1/2' >
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <Select id='category' name='category' className='w-full rounded' value={selectBook} onChange={handleChange} >
              {
                bookCategory.map((option) => <option key={option}
                  value={option} >{option}</option>)
              }
            </Select>
          </div>
        </div>
        {/* Book description */}

        <div className='w-4/5' >
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea defaultValue={bookDescription} className='w-full' id="bookDescription" placeholder="Write Your Book Description" required rows={6} />
        </div>
        <div className='w-4/5'>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF Url" />
          </div>
          <TextInput defaultValue={bookPdfUrl} id="bookPdfUrl" type="text" placeholder="Book PDF Url" required />
        </div>

        <Button type="submit" className='mt-5 w-4/5' >Update Book</Button>

      </form>
    </div>
  )
}

export default EditBooks
