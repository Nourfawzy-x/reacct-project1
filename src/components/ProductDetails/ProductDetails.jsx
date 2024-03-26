import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  let { id } = useParams();

  const [productDetails, setProductDetails] = useState(null);

  async function getProductDetails(param) {
    let { data } = await axios.get(`http://localhost:3000/recipes/${param}`);
    setProductDetails(data);
    console.log(data.id);
  }

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  if (!productDetails) {
    return (
      <>
        <div>
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
      </>
    );
  }
  return (
    <div>
      {" "}
      <div className="card w-2/5  bg-base-100 shadow-xl mx-auto my-6">
        <figure>
          <img src={productDetails.image} alt="Shoes" className="w-2/3" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productDetails.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>cuisine:{productDetails.cuisine}</p>
        </div>

        <div className="card-actions justify-end">
          <Link to={"/home"}>
            <button className="btn btn-outline mb-4 mr-4">back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
