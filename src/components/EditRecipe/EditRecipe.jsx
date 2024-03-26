import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditRecipe() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [editRecipe, setEditRecipe] = useState({
    name: "",
    image: "",
    cuisine: "",
  });

  async function updateRecipe(param) {
    try {
      const updatedFields = {};
      if (editRecipe.name.trim() !== "") {
        updatedFields.name = editRecipe.name;
      }

      if (editRecipe.image.trim() !== "") {
        updatedFields.image = editRecipe.image;
      }

      if (editRecipe.cuisine.trim() !== "") {
        updatedFields.cuisine = editRecipe.cuisine;
      }
      if (Object.keys(updatedFields).length > 0) {
        let response = await axios.patch(
          `http://localhost:3000/recipes/${param}`,
          updatedFields
        );
        console.log("Recipe updated successfully");
        console.log(editRecipe);
      } else {
        console.log("No fields to update");
      }
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editRecipe);
    await updateRecipe(id);
    navigate(`/home`);
  };
  const handleINputChange = (e) => {
    setEditRecipe({ ...editRecipe, [e.target.name]: e.target.value });
    console.log(editRecipe);
  };

  return (
    <>
      <div className="container mx-auto px-6">
        <form className=" my-10" onSubmit={handleSubmit}>
          <h3 className="text-3xl my-4 text-rose-600">update</h3>
          <div className="my-4 ">
            <label htmlFor="username">name:</label>
            <br />
            <input
              className="my-2 border-2 border-solid border-gray-700  bg-transparent w-4/5"
              name="name"
              type="text"
              value={editRecipe.name}
              onChange={handleINputChange}
            />
          </div>
          <div className="my-4 ">
            <label htmlFor="cuisine">cuisine:</label>
            <br />
            <input
              className="my-2 border-2 border-solid border-gray-700  bg-transparent w-4/5"
              name="cuisine"
              type="text"
              value={editRecipe.cuisine}
              onChange={handleINputChange}
            />
          </div>

          <div className="my-4 ">
            <label htmlFor="image">image:</label>
            <br />
            <input
              className="my-2 border-2 border-solid border-gray-700  bg-transparent w-4/5"
              name="image"
              type="text"
              value={editRecipe.image}
              onChange={handleINputChange}
            />
          </div>

          <button
            type="submit"
            className="btn border-2  px-8 bg-rose-600 text-white text-md "
          >
            update
          </button>
        </form>
      </div>
    </>
  );
}
