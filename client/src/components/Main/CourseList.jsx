import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:8080/api/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(courses);

  return courses.map((course) => (
    <>
      <div className="container p-2 border border-neutral-300 rounded-xl my-4">
        <Fragment key={course.id}>
          <Link to={`/courses/${course.id}`}>
            <CourseTitle title={course.title} />
            <CourseLecture lecturer={course.lecturer} />
          </Link>
        </Fragment>
      </div>
    </>
  ));
}

const CourseTitle = ({ title }) => {
  return <h1 className="text-lg my-2 ms-5 font-bold">{title}</h1>;
};

const CourseLecture = ({ lecturer }) => {
  return <p className="my-2 ms-5 font-semibold text-sm">{lecturer}</p>;
};
