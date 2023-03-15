import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategoria = ({ categorias, setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const inputChange = (e)=> {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 0){
            if(categorias.includes(inputValue)){
                console.error('ya existe en la lista')
                return;
            }else{ 
                setCategorias(ctg => [inputValue,...ctg]);
                setInputValue('');
            }
        }else {
            return
        }
        console.log('enviado')        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="tex"
                value={inputValue}
                onChange={inputChange}
            />
        </form>
    );
}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategoria;