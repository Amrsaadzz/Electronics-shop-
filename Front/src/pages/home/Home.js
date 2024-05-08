import React, { useState, useEffect } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import '../../styles/home.css';
import PopWindow from './pop_window'; // Corrected import statement
import Recentcards from '../../components/Cart.js';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Cart from '../../components/Cart.js';

const Home = () => {
    const [books, setbooks] = useState({
        loading: true,
        results: [],
        err: null,
        reload: 0,
    })
    useEffect(() => {
        setbooks({ ...books, loading: true })
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                console.log(response);
                setbooks({ ...books, results: response.data, loading: false })

            })
            .catch(err => {
                setbooks({ ...books, loading: false, err: "something wrong" })

            });

    }, [books.reload])
    // search
    const [search , setsearch] = useState({
        loading: true,
        results: [],
        err: null,
        reload: 0,
    })
    const SearchFun = (e) => {
        e.preventDefault(); //to avoide reload
        setbooks({ ...books,reload: books.reload + 1})
    }
    return (
        <>
            {books.loading === true && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            {/* {books.loading === false && (
                
            )} */}
            <Form onSubmit={SearchFun}>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <Form.Control type="text" 
                    placeholder="search"
                    required
                    onChange={(e)=> setsearch(e.target.value)}
                     />
                    <button className='btn btn-dark'>search</button>
                </Form.Group>
            </Form>

            {/* calling the cart */}
            {books.results.map((book) => (
                <div key={book.id}>
                    <Cart
                        author_name={book.author_name}
                        book_name={book.book_name}
                        description={book.description}
                        price={book.price}
                        id={book.id} />
                </div>


            ))}
            {/* Render Recentcards component multiple times */}
            <PopWindow />
            <PopWindow />
            <PopWindow />
            <PopWindow />

        </>
    );
};

export default Home;
