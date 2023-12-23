import React, { useEffect, useState } from 'react'
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
const ManageBook = () => {
  const [allBook, setAllBook] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/allBooks").then(res => res.json()).then(data => setAllBook(data))
  }, [])
  // delete
  const handleDelete=(id)=>{
      // console.log(id)
      fetch(`http://localhost:4000/book/${id}`,{
           method:"DELETE",
      }).then(res=>res.json()).then(data=>{
        alert("Book is Delete successfully")
        // setAllBook(data)
      })
  }
  return (
    <div className='px-4 my-12 w-4/5 ' >
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Book`s</h2>
      {/* Table */}
      <div className="overflow-x-auto">
        <Table className='lg:w-[1180px]' >
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="">Edit or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          

           {
              allBook.map((book,i)=><Table.Body className="divide-y" key={book._id} > 
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {i+1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <Link to={`/admin/dashboard/edit/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500
                  mr-5 ">
                    Edit
                  </Link>
                  <Button onClick={()=>handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white 
                   rounded-sm hover:bg-sky-600' >Delete</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
           )
           }
              
             
        </Table>
      </div>
    </div>
  )
}

export default ManageBook
