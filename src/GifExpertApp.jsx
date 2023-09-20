import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // categories.push( newCategory );
    setCategories([newCategory, ...categories]);
    // setcategories(cat => [...cat, 'Valorant']);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
