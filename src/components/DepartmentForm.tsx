import { useEffect, useState } from "react";
import { BASE_URL } from "../lib/constants";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { DepartmentObject } from "../types";
import { slugify } from "../lib/slugify";
import { useNavigate } from "react-router";
interface DepartmentFormProps {
  method?: "POST" | "PATCH";
  department?: DepartmentObject;
}
const DepartmentForm = (departmentFormProps: DepartmentFormProps) => {
    const navigate = useNavigate()
  const { method, department } = departmentFormProps || "POST";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (method === 'PATCH' && department) {
      setTitle(department.title);
      setDescription(department.description);
    }
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();
    // Ef þetta er PATCH þá vitum við department id hvort sem er
    const api_url =
      method === "POST"
        ? `${BASE_URL}/departments`
        : `${BASE_URL}/departments/${department?.slug}`;

    // Send the form data to the server
    fetch(api_url, {
      method,
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Clear the form inputs
        setTitle("");
        setDescription("");
        if (method === "POST")
          toast.success("Department Created", {
            autoClose: 1000,
          });
        else {
          toast.success("Department updated", {
            autoClose: 1000,
          });
        }
        setTimeout(() =>  method === 'PATCH' ? navigate('/departments') : window.location.reload(), 1000);
      })
      .catch((error: Error) => {
        toast.error(error.message);
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
            {method === 'POST' ? 'Búa til nýja deild' : 'Breyta deild'}
          
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
};

export default DepartmentForm;
