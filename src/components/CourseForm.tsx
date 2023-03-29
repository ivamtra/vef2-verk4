import { useEffect, useState } from "react";
import { BASE_URL } from "../lib/constants";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CourseObject } from "../types";

interface CourseFormProps {
  course?: CourseObject;
  method: "POST" | "PATCH";
}

const CourseForm = (courseFormProps: CourseFormProps) => {
  const { course, method } = courseFormProps;
  const navigate = useNavigate();
  //   const [title, setTitle] = useState("");
  //   const [courseId, setCourseId] = useState("");
  //   const [semester, setSemester] = useState("Vor");
  //   const [description, setDescription] = useState("");
  //   const [level, setLevel] = useState("");
  //   const [url, setUrl] = useState("");
  //   const [units, setUnits] = useState(0);
  const emptyCourseFields: Partial<CourseObject> = {
    title: "",
    courseId: "",
    // Default Vor í field
    semester: "Vor",
    level: "",
    url: "",
    units: 0,
  };
  const [newCourse, setNewCourse] =
    useState<Partial<CourseObject>>(emptyCourseFields);
  useEffect(() => {
    if (course) setNewCourse(course);
  }, [course]);

  const { slug } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: any) {
    event.preventDefault();

    // Ef method er PATCH þá höfum við sjálfkrafa aðgang að course
    const api_url =
      method === "POST"
        ? `${BASE_URL}/departments/${slug}/courses`
        : `${BASE_URL}/departments/${slug}/courses/${course?.courseId}`;

    // Send the form data to the server
    fetch(api_url, {
      method,
      body: JSON.stringify(newCourse),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // Fara í næsta skref
        if (!response.ok) {
          return response.json();
        }
        // Status ok og allt í góðu til að gefa success

        // Clear the form inputs
        setNewCourse(emptyCourseFields);
        toast.success(method === "POST" ? "Course Created" : "Course updated", {
          autoClose: 1000,
        });
        setTimeout(
          () =>
            method === "POST"
              ? window.location.reload()
              : navigate(`/departments/${slug}/courses`),
          1000
        );
      })
      // Hér status ekki 200 og því einhver villa
      .then((data) => {

        const errors: any[] = data?.errors;
        if (errors)
          errors.forEach((error) => {
            toast.error(error.msg);
          });
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
        className="max-w-2xl  border border-gray-300 p-4 rounded-lg sm:p-8 w-9/12 m-3"
      >
        <h2 className=" text-xl mb-4 text-center font-bold text-green-700">
          {method === "POST" ? "Búa til nýjan áfanga" : "Breyta áfanga"}
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-2"
          >
            Course Name:
          </label>
          <input
            type="text"
            id="name"
            value={newCourse.title}
            onChange={(event) =>
              setNewCourse({ ...newCourse, title: event.target.value })
            }
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-2"
          >
            Course id:
          </label>
          <input
            type="text"
            id="name"
            value={newCourse.courseId}
            onChange={(event) =>
              setNewCourse({ ...newCourse, courseId: event.target.value })
            }
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="semester"
            className="block font-medium text-gray-700 mb-2"
          >
            Semester:
          </label>
          <select
            value={newCourse.semester}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) =>
              setNewCourse({ ...newCourse, semester: event.target.value })
            }
          >
            <option value="Vor">Vor</option>
            <option value="Sumar">Sumar</option>
            <option value="Heilsárs">Heilsárs</option>
            <option value="Haust">Haust</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-2"
          >
            Units:
          </label>
          <input
            type="number"
            id="name"
            value={newCourse.units}
            onChange={(event) =>
              setNewCourse({ ...newCourse, units: Number(event.target.value) })
            }
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-2"
          >
            Level:
          </label>
          <input
            type="text"
            id="name"
            value={newCourse.level}
            onChange={(event) =>
              setNewCourse({ ...newCourse, level: event.target.value })
            }
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-2"
          >
            Url:
          </label>
          <input
            type="text"
            id="name"
            value={newCourse.url}
            onChange={(event) =>
              setNewCourse({ ...newCourse, url: event.target.value })
            }
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
};

export default CourseForm;
