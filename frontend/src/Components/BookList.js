import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import Review from './Review'
import Login from "./Login";

const BookList = ({ searchTerm }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/bookreview/book/`)
            .then(response => setBooks(response.data))
            .catch(error => console.error("err", error));

    }, [searchTerm]);


    return (

        <div className="center">

            <h1>BOOK LIST</h1>
            <div className="login">
                <Login />
            </div>

            <SearchBar />
            
            {books.map(book => (
                <div className="con" key={book.id}>
                    <img className="book" src={book.cover_image} alt={book.title} />
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <div><Review book={book.id} /></div>
                </div>
            ))}
        </div>
    );
};

export default BookList;