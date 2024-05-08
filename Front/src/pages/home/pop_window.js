import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DashboardCard from '../dashboard/dashboard'; // Import DashboardCard component
import { Link } from "react-router-dom";


function PopWindow() {
  return (
    <>
      <Link className='button d-flex' variant="primary" to={'/dashboard'}>
        Go To The Cart
      </Link>
    </>
  );
}

export default PopWindow;