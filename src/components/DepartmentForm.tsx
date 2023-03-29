import { useState } from "react";
import { BASE_URL } from "../lib/constants";
import { ToastContainer, toast } from "react-toastify";
import React, { Component }  from 'react';

function DepartmentForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event: any) {
    console.log(title, description);
    event.preventDefault();

    // Send the form data to the server
    fetch(`${BASE_URL}/departments`, {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Form submitted successfully");
        // Clear the form inputs
        setTitle("");
        setDescription("");
        toast.success('Department Created' , {
          autoClose: 1000
        })
        setTimeout(() => window.location.reload(), 1000)
      })
      .catch((error : Error) => {
        toast.error(error.message)
        console.error("There was a problem submitting the form:", error);
      });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto border border-gray-300 p-4 rounded-lg sm:p-8"
      >
        <h2 className=" text-xl mb-4 text-center font-bold text-green-700">
          Búa til nýja deild
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-2"
          >
            Department Name:
          </label>
          <input
            type="text"
            id="name"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block font-medium text-gray-700 mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          className="px-2 py-1 rounded-md text-white"
          style={{ backgroundColor: "#0085ff" }}
          type="submit"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default DepartmentForm;
