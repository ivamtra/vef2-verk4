import React, { useEffect } from "react";
import Course from "../components/Course";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL } from "../lib/constants";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const { slug, courseId } = useParams();
  const {
    data: course,
    loading,
    error,
  } = useFetch(`${BASE_URL}/departments/${slug}/courses/${courseId}`);
  if (!course) return <>Empty</>;
  return (
    <>
      <h1>Course Page</h1>

      <Course course={course} slug={slug}/>
    </>
  );
};

export default CoursePage;
