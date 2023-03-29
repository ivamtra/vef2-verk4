import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../lib/constants";
import Courses from "../components/Courses";
import React from "react";
import CourseForm from "../components/CourseForm";

const CoursesPage = () => {
  const { slug } = useParams();
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`${BASE_URL}/departments/${slug}/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);

        console.log("shit");
      })
      .catch((err) => {
        console.error(err);
        console.log("catch");
        setError(true);
      });
  }, [slug]);

  if (loading) {
    return <h1 className=" tex-lg to-red-600">Loading</h1>;
  }

  if (error) {
    return <>Error</>;
  }
  return (
    <>
      <h1>CoursesPage</h1>
      <CourseForm />
      <div>{courses ? <Courses courses={courses}  slug={slug}/> : <>Empty</>}</div>
    </>
  );
};

export default CoursesPage;
