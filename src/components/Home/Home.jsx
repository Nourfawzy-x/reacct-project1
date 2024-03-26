// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../product/Product";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  async function getRecipes() {
    let { data } = await axios.get("http://localhost:3000/recipes");
    setRecipes(data);
  }
  async function deleteRecipe(id) {
    await axios.delete(`http://localhost:3000/recipes/${id}`);
    let deleteRecipe = [...recipes];
    deleteRecipe = deleteRecipe.filter((r) => r.id !== id);
    setRecipes(deleteRecipe);
  }

  function handleUpdate(id) {
    let updateRecipe = [...recipes];
    updateRecipe = updateRecipe.find((r) => r.id === id);
    // console.log(id);
    console.log(updateRecipe);
  }
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <div className="w-4/5	 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <Product
              recipe={recipe}
              key={recipe.id}
              onDelete={deleteRecipe}
              onUpdate={handleUpdate}
            />
          ))}
        </div>
      </div>
    </>
  );
}
// json-server db.json --watch
