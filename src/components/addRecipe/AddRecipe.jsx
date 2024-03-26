import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AddRecipe() {
  let navigate = useNavigate();
  const initialValues = {
    name: "",
    cuisine: "",
    image: null,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("cuisine", values.cuisine);
        formData.append("image", values.image);
        console.log(values.cuisine, values.image, values.name);

        const response = await axios.post(
          "http://localhost:3000/recipes",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        navigate("/home");
        // Handle successful submission or navigation here
      } catch (error) {
        console.error(error);
        // Handle error
      }
    },
  });

  const handleFileChange = (event) => {
    formik.setFieldValue("image", event.target.files[0]);
    formik.setFieldValue("image", URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="container mx-auto px-6">
      <form onSubmit={formik.handleSubmit} className="my-10">
        <h3 className="text-3xl my-4 text-rose-600">Add new recipe</h3>

        <div className="my-4">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="my-2 border-2 border-solid border-gray-700 bg-transparent w-4/5"
          />
        </div>

        <div className="my-4">
          <label htmlFor="cuisine">Cuisine:</label>
          <br />
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            onChange={formik.handleChange}
            value={formik.values.cuisine}
            className="my-2 border-2 border-solid border-gray-700 bg-transparent w-4/5"
          />
        </div>

        <div className="my-4">
          <label htmlFor="image">Image:</label>
          <br />
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="my-2 border-2 border-solid border-gray-700 bg-transparent w-4/5"
          />
        </div>

        <button
          type="submit"
          className="btn border-2 px-8 bg-rose-600 text-white text-md"
        >
          Add new post
        </button>
      </form>
    </div>
  );
}
