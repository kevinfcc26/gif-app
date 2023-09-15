import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = ( newCategory ) => {
        // categories.push( newCategory );
        setCategories([newCategory, ...categories] );
        // setcategories(cat => [...cat, 'Valorant']);

    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory 
                // setCategories = { setCategories }
                onNewCategory={ event => onAddCategory(event) }
            />
            {/* Listado de gif */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* Gif Item */}
        </>
    )
}


