import './App.css';
import Alert from '../Alert/Alert';
import React from 'react';
import CartSuccess from '../CartSuccess/CartSuccess';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
   padding: 20,
  }
  });
 
function App() {
  const classes = useStyles()
  return (
  <div className={classes.wrapper}>
    <Alert title="Items Not Added" type="error">
    <div>Your Items are out of stock.</div>
    </Alert>
    <CartSuccess />
    </div>
)}

export default App;
