import { useState } from "react";

export default function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState();

    const onInputChanged = ({target}) => {
        setInputValue(target.value);
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1)
        return;
        
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

  return (
    <>
        <form onSubmit={ e => handleSubmit(e)} >
            <input type="text" 
            className="rounded-sm font-medium p-1" 
            placeholder=" Buscar gifs"
            value={inputValue}
            onChange={onInputChanged}
            />
        </form>
    </>
  )
}
