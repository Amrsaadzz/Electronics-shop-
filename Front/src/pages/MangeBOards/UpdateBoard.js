import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const CreateBoard = () => {
    let {id} = useParams();
    const [books, setBooks] = useState({
        book_name: '',
        author_name: '',
        description: '',
        price: '',
        err: [],
        loading: false,
        reload:false,
    });

    const UpdateBook = (e) => {
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
        axios.put(`http://localhost:8080/api/products/${id}`, formData)
            .then(response => {
                setBooks({ ...books, loading:false });
            })
            .catch(error => {
                // Handle error
                console.error('Error adding book:', error);
                setBooks({ ...books, loading: false, err: ["Failed to add book. Please try again."] });
            });
    };

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/products/${id}`)
        .then(response => {
            setBooks({
                ...books,
                book_name: response.data.book_name,
                author_name: response.data.author_name,
                description: response.data.description,
                price: response.data.price,
            })
        })
        .catch(error => {
            // Handle error
            console.error('Error adding book:', error);
            setBooks({ ...books, loading: false, err: ["Failed to add book. Please try again."] });
        });


    },[books.reload])

    return (
        <div>
            <form onSubmit={UpdateBook}>
                <div>
                    <div className="login-form-container">
                        <div className="header">
                            <h3>update book</h3>
                            <div className="underline"></div>
                        </div>
                        <div className="inputs">
                            <div className="input">
                                <input type="text" placeholder='author name'
                                  value={books.author_name}
                                  onChange={(e) => setBooks({ ...books, author_name: e.target.value })}
                                />
                            </div>
                            <div className="input">
                                <input type="text" placeholder='bookName' 
                                  value={books.book_name}
                                  onChange={(e) => setBooks({ ...books, book_name: e.target.value })}
                                />
                            </div>
                            <div className="input">
                                <input type="text" placeholder='Description' 
                                  value={books.description}
                                  onChange={(e) => setBooks({ ...books, description: e.target.value })}
                                />
                            </div>
                            <div className="input">
                                <input type="text" placeholder='price' 
                                  value={books.price}
                                  onChange={(e) => setBooks({ ...books, price: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="submit-container">
                            <Link to={books.id} className="submit gray" onClick={()=>{UpdateBook(books.id)}}> add </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateBoard;