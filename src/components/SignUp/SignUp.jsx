// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  let navigate = useNavigate();
  let [errorMessage, setErrorMessage] = useState("");
  function addUser(values) {
    axios
      .post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`, values)
      .then((data) => {
        if ((data.data.msg = "done")) {
          navigate("/");
        }
      })
      .catch((err) => {
        setErrorMessage(err.response.data.msg);
      });
  }
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(20, "too long")

      .required("Required"),
    age: Yup.number()
      .min(16, "age must be at least 18")
      .max(80, "age must be maximum 80")
      .required("Required"),
    phone: Yup.string()
      .required("Required")
      .matches(/^01[0125][0-9]{8}/, "doesn't match"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    },
    validationSchema: SignupSchema,
    onSubmit: submitRegister,
  });
  function submitRegister(values) {
    addUser(values);
  }
  return (
    <div className="container mx-auto px-4">
      <form className=" my-10" onSubmit={formik.handleSubmit}>
        <h3 className="text-3xl my-4 text-pink-600">Register</h3>
        <div className="my-4 ">
          <label htmlFor="name">name:</label>
          <br />
          <input
            className="my-2 border-2 border-solid border-gray-700  bg-transparent w-4/5"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="name"
            type="text"
          />
          {formik.errors.name && formik.touched.name ? (
            <div role="alert" className="alert  w-4/5 p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{formik.errors.name}</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="my-4">
          <label htmlFor="email">email:</label>
          <br />
          <input
            className="my-2 border-2 border-solid border-gray-700  bg-transparent w-4/5 "
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            type="email
            "
          />
          {formik.errors.email && formik.touched.email ? (
            <div role="alert" className="alert  w-4/5 p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{formik.errors.email}</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="my-4">
          <label htmlFor="password">password:</label>
          <br />
          <input
            className="my-2 border-2 border-solid border-gray-700  bg-transparent w-4/5 "
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
            type="password"
          />
          {formik.errors.password && formik.touched.password ? (
            <div role="alert" className="alert  w-4/5 p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{formik.errors.password}</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="my-4">
          <label htmlFor="age">age:</label>
          <br />
          <input
            className="my-2 border-2 border-solid border-gray-700  bg-transparent w-4/5 "
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="age"
          />
        </div>
        <div className="my-4">
          <label htmlFor="phone">phone:</label>
          <br />
          <input
            className="my-2 border-2 border-solid border-gray-700  bg-transparent w-4/5"
            name="phone"
            type="text"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="phone"
          />
        </div>
        {errorMessage ? (
          <div className="alert alert-error p-2 mb-4 text-gray-50 w-72">
            {errorMessage}
          </div>
        ) : (
          ""
        )}
        <div>
          <button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className="btn border-2  px-8  text-md  bg-pink-600 text-white"
          >
            submit
          </button>

          <Link to={"/"}>
            <a className="underline mx-1 text-blue-600">go to login page</a>
          </Link>
        </div>
      </form>
    </div>
  );
}
