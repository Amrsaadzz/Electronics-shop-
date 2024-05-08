import React, { useState, useEffect } from 'react';
import '../../styles/mangeboards.css';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Header from '../../shared/Header';

const MangeBoards = () => {
  const [books, setBooks] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect((e) => {
    setBooks({ ...books, loading: true });
    axios.get('http://localhost:8080/api/products')
      .then(resp => {
        setBooks({ ...books, results: resp.data, loading: false });
      })
      .catch(err => {
        setBooks({ ...books, loading: false, err: "something wrong" });
      });
  }, [books.reload]);

  const DeleteBook = (id) => {
    axios.delete(`http://localhost:8080/api/products/${id}`)

      .then(resp => {
        setBooks({...books, reload : books.reload+1})
      })
      .catch(err => {
      });
  };

  return (
    <div className='mangeboards'>
      <div>
        <h3 className='mangeboards'>MangeBoards</h3>
        {/* <Alert variant='danger' className='p-2'>This is a alert—check it out!</Alert>
        <Alert variant='success' className='p-2'>This is a alert—check it out!</Alert> */}
        <Link className='btn-1' to={'create'}>add new</Link>
      </div>
      <Table striped="columns">
        <thead>
          <tr>
            <th>id</th>
            <th>author name</th>
            <th>book name</th>
            <th>description</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {books.results.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.book_name}</td>
              <td>{book.author_name}</td>
              <td>{book.description}</td>
              <td>{book.price}</td>
              <td>
              <Link to={'update'} className='btn btn-sm btn-primary m-2'>update</Link>
                <Link to={'/home'} className='btn btn-sm btn-success'>show</Link>
                <Link to={book.id} className='btn btn-sm btn-danger m-2'onClick={()=>{DeleteBook(book.id)}}>delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MangeBoards;
