import { Link } from "react-router-dom";
import { CourseObject } from "../types";
import React from "react";

interface CourseProps {
  course: CourseObject;
  slug?: string;
  showLink: boolean;
}

const Course = (courseProps: CourseProps) => {
  const { course, slug, showLink } = courseProps;

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4">
        <div className="px-4 py-2 flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/4 mr-4">
            <p className="text-gray-700 font-bold text-lg">
              {showLink ? (
                <Link to={`/departments/${slug}/courses/${course.courseId}`}>
                  {course.courseId} ↗️
                </Link>
              ) : (
                <>{course.courseId}</>
              )}
            </p>
          </div>
          <div className="md:w-3/4">
            <p className="text-gray-800">{course.title}</p>
            <p className="text-gray-600">{course.semester}</p>
            <p className="text-gray-600">{course.level}</p>
            <p className="text-gray-600">{course.units} einingar</p>
            <a href={course.url} className="text-blue-600 underline">
              {course.url}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
