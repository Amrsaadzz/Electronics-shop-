import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const CreateBoard = () => {
    const [books, setBooks] = useState({
        book_name: '',
        author_name: '',
        description: '',
        price: '',
        err: [],
        loading: false
    });

    const CreateBook = (e) => {
        e.preventDefault();

        // Set loading state to true while submitting
        setBooks({ ...books, loading: true });

        // Create an object with form data
        const formData = {
            book_name: books.book_name,
            author_name: books.author_name,
            description: books.description,
            price: books.price
        };

        // Submit the form data using axios
        axios.post('http://localhost:8080/api/products', formData)
            .then(response => {
                console.log('Book added successfully:', response.data);

                // Clear form fields
                setBooks({
                    book_name: '',
                    author_name: '',
                    description: '',
                    price: '',
                    err: [],
                    loading: false
                });
            })
            .catch(error => {
                // Handle error
                console.error('Error adding book:', error);
                setBooks({ ...books, loading: false, err: ["Failed to add book. Please try again."] });
            });
    };

    return (
        <div>
            <form onSubmit={CreateBook}>
                <div>
                    <div className="login-form-container">
                        <div className="header">
                            <h3>add new book</h3>
                            <div className="underline"></div>
                        </div>
                        <div className="inputs">
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder='author name'
                                    value={books.author_name}
                                    onChange={(e) => setBooks({ ...books, author_name: e.target.value })}
                                />
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder='bookName'
                                    value={books.book_name}
                                    onChange={(e) => setBooks({ ...books, book_name: e.target.value })}
                                />
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder='Description'
                                    value={books.description}
                                    onChange={(e) => setBooks({ ...books, description: e.target.value })}
                                />
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder='price'
                                    value={books.price}
                                    onChange={(e) => setBooks({ ...books, price: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="submit-container">
                            <button type="submit" className="submit gray" disabled={books.loading}>
                                {books.loading ? 'Adding...' : 'Add'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            {books.err.length > 0 && <Alert variant="danger">{books.err}</Alert>}
        </div>
    );
};

export default CreateBoard;
