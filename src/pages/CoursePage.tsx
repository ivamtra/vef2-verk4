import React from "react";
import Course from "../components/Course";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL } from "../lib/constants";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Empty from "../components/Empty";
import CourseForm from "../components/CourseForm";
import DeleteCourseButton from "../components/DeleteCourseButton";

const CoursePage = () => {
  const { slug, courseId } = useParams();
  const {
    data: course,
    loading,
    error,
  } = useFetch(`${BASE_URL}/departments/${slug}/courses/${courseId}`);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  if (error)
    return (
      <>
        <Error message={error} />
      </>
    );

  if (!course)
    return (
      <>
        <Empty />
      </>
    );

  return (
    <>
      <div className=" my-0 mx-auto flex flex-col items-center justify-center">
        <h1 className=" text-4xl mb-8">Áfangasíða</h1>
        <Course course={course} slug={slug} showLink={false} />
        <CourseForm course={course} method="PATCH" />
        <DeleteCourseButton slug={slug} courseId={courseId} />
      </div>
    </>
  );
};

export default CoursePage;
