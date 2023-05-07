import React from "react";

const AddCoffee = () => {
  return (
    <div className="bg-yellow-200 p-24">
      <h2 className="text-2xl font-bold">Add a Coffee</h2>
      <form action="">
        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Coffee</span>
            </label>
            <label className="input-group w-full input-group-vertical">
              <input
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
