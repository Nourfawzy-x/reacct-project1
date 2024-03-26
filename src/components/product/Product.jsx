// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  let { id } = props.recipe;

  return (
    <>
      <div className="card  bg-base-100 shadow-xl mx-auto my-6 glass">
        <Link to={`/home/productDetails/${id}`}>
          <figure>
            <img src={props.recipe.image} alt="food" className="w-2/3 my-2" />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title">
            {props.recipe.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>cuisine:{props.recipe.cuisine}</p>
          <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-error"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Delete
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Are you sure you want to delete post?</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      className="btn btn-outline btn-error mx-2"
                      onClick={() => props.onDelete(id)}
                    >
                      yes,i'm sure!
                    </button>
                    <button className="btn btn-outline btn-success">no</button>
                  </form>
                </div>
              </div>
            </dialog>

            <Link to={`/EditRecipe/${props.recipe.id}`}>
              <button
                className="btn btn-info"
                onClick={() => {
                  props.onUpdate(props.recipe.id);
                }}
              >
                edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
