import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputvalue] = useState('One punch');

    const onInputChange = ({ target }) => {
        setInputvalue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if (inputValue.trim() <= 2) return;
        setCategories( categories => [ inputValue, ...categories ]);
        setInputvalue('');
    }

    return (
        <form onSubmit={ onSubmit } action="">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
