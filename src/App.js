import React,{useEffect, useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './style.css';
import axios from 'axios';

const App = () => {
const[books, setBooks] = useState([]);
    const createBooks = (title) =>{
        const updatedBooks = [
            ...books,
         {id:Math.floor(Math.random()*9999), title:title}
        ];
        setBooks(updatedBooks);
        console.log(books);
    };
    const updateBookById = async (id, title) => {
      const response = await axios.put(`http://localhost:3001/books/${id}`,{
        title,
      });
      const updatedBooks = books.map((book)=>
         book.id === id ? {...book, title}: book
       );
       setBooks(updatedBooks);
     
  };
    const deleteBookById = async(id) =>{
      await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter(book=> book.id !==id);
        setBooks(updatedBooks);
    };
    const fetchtBooks = async() => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    };
    useEffect(() => {
    fetchtBooks();
  }, []);
  return (
    <div>
      <BookList
      onEdit={updateBookById}
      books={books}
      onDelete={deleteBookById}
      />
        <BookCreate createBooks={createBooks}/>
    </div>
  );
};

export default App;
