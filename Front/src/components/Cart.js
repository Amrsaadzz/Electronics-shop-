import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/recentcard.css';

const Cart = (props) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(Cart.comments || []);  
    const handleAddComment = () => {
        if (comment.trim() !== '') {
          setComments([...comments, comment]);
          setComment('');
        }
      };
    return (
        <div>
            <Card className='card'>
                    <Card.Body>
                        <Card.Title>{props.book_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> author: {props.author_name}</Card.Subtitle>
                        <Card.Text>description {props.description}</Card.Text>
                        <Card.Footer> PRICE :{props.price} $ </Card.Footer>
                        <div className="comments m-10">
                            <h3>feedback</h3>
                            <ul>
                                {comments.map((comment, index) => (
                                    <li key={index}>{comment}</li>
                                ))}
                            </ul>
                            <div className="comment-input m-10">
                                <input
                                    type="text"
                                    placeholder="Add a feedback"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <button onClick={handleAddComment}>Add</button>
                            </div>
                        </div>
                        <Button variant="success">Add To Cart</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};
export default Cart;
