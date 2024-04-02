import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const handleSearch = async (event) => {
        event.preventDefault();

        fetch(`http://127.0.0.1:8000/bookreview/book/`)
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error('Error:', error));
    };
    const filteredBooks = books.filter(book =>
        book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    return (
        <div className="main">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search by title, author, or genre"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div className="con">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="book">
                        <img src={book.cover} alt={book.title} />
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;