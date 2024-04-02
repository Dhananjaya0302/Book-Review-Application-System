import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [book, setbook] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate form inputs
        if (!rating || !comment) {
            alert('Please fill out all fields.');
            return;
        }

        // Submit form
        axios.post('http://127.0.0.1:8000/bookreview/review/', { book , rating, comment })
            .then(response => alert('Review submitted!'))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Book ID:
                <input type="number" value={book} onChange={e => setbook(e.target.value)} />
            </label>
            <label>
                Rating:
                <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} />
            </label>
            <label>
                Comment:
                <textarea value={comment} onChange={e => setComment(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReviewForm