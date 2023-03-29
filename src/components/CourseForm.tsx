import { useState } from "react";
import { BASE_URL } from "../lib/constants";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { useParams } from "react-router-dom";
function CourseForm() {
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("")
  const [semester, setSemester] = useState("Vor");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [url, setUrl] = useState("");
  const [units, setUnits] = useState(0);

  const {slug} = useParams()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: any) {
    console.log('title', title)
    console.log('semester', semester)
    console.log('description', description)
    console.log('level', level)
    console.log('units', units)

    event.preventDefault();

    // Send the form data to the server
    fetch(`${BASE_URL}/departments/${slug}/courses`, {
      method: "POST",
      body: JSON.stringify({ title, courseId, semester, description, level, url, units}),
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
        toast.success("Department Created", {
          autoClose: 1000,
        });
        setTimeout(() => window.location.reload(), 1000);
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
        <h2 className=" text-xl mb-4 text-center font-bold text-green-700">Búa til nýjan áfanga</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
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
          <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
            Course id:
          </label>
          <input
            type="text"
            id="name"
            value={courseId}
            onChange={(event) => setCourseId(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium text-gray-700 mb-2">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="semester" className="block font-medium text-gray-700 mb-2">
            Semester:
          </label>
          <select
            value={semester}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) => setSemester(event.target.value)}
          >
            <option value="Vor">Vor</option>
            <option value="Sumar">Sumar</option>
            <option value="Hálfsárs">Hálfsárs</option>
            <option value="Haust">Haust</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
            Units:
          </label>
          <input
            type="number"
            id="name"
            value={units}
            onChange={(event) => setUnits(Number(event.target.value))}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
            Level:
          </label>
          <input
            type="text"
            id="name"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
            Url:
          </label>
          <input
            type="text"
            id="name"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
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

export default CourseForm;
