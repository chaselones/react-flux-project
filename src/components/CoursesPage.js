import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  //life cycle method for making API calls.  Component must be mounted before you can call
  //set state.
  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses:</h2>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
