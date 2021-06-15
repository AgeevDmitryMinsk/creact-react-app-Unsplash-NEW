import React from 'react';

//import './input.css'
import styles from './input.module.css'

const Input = ({placeholderText123, handleInput12321}) => {
     return (
         // <input className="input"
         <input className={styles.input}
                placeholder={placeholderText123}
                onChange={handleInput12321}
                type="text"/>
     )
};

export default Input;
