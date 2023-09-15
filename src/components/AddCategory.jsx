import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputvalue] = useState('One punch');

    const onInputChange = ({ target }) => {
        setInputvalue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if (inputValue.trim() <= 1) return;


        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
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
