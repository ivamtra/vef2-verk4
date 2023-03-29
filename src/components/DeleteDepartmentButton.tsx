import { useState } from "react";
import { BASE_URL } from "../lib/constants";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React  from 'react';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DeleteDepartmentButton = ({ slug }: any) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    setLoading(true);

    // Send the delete request to the server
    fetch(`${BASE_URL}/departments/${slug}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Response: ${response.status}`);
        }
        console.log("Department deleted successfully");
        toast.success("Department deleted successfully \n Redirecting...", {autoClose: 2000})

        setTimeout(() => navigate("/departments"), 2000)
        
      })
      .catch((error : Error) => {
        console.error("There was a problem deleting the department:", error);
        toast.error(error.message)
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-4 focus:outline-none focus:shadow-outline"
        disabled={loading}
      >
        {loading ? "Deleting..." : "Delete Department"}
      </button>
      <ToastContainer />
    </>
  );
};

export default DeleteDepartmentButton;
