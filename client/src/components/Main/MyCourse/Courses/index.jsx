import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";
import { AiOutlineFileText } from "react-icons/ai";
import MarkButton from "../../../Button/MarkButton";
import BackButton from "../../../Button/BackButton";
import axios from "axios";
import { Skeleton } from "@mui/material";

const Courses = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/courses/${id}`)
      .then((response) => {
        console.log("success fetching");
        setCourses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("faied fetching");
        console.error(error);
      });
  }, [id]);

  const course = courses.find((course) => course.id === Number(id));
  const materi = course.details;

  return (
    <>
      {loading ? (
        <Skeleton
          animation="pulse"
          variant="rectangular"
          width={210}
          height={110}
        />
      ) : (
        <div className="container">
          <div className="flex w-screen">
            <div className="w-2/12 sticky">
              <Sidebar />
            </div>
            <div className="w-10/12">
              <Navbar />
              <div className="w-full flex pe-8">
                <BackButton where={`/courses`} />
                <div className="container">
                  <div className="container px-52 flex ps-24 pt-12">
                    <div className="container mx-auto text-center">
                      <h1 className="font-bold text-4xl my-2">
                        {course.title}
                      </h1>
                      <p className="text-lg font-semibold my-2">
                        {course.lecturer}
                      </p>
                      <div className="container border"></div>
                      <p className="text-md my-2">{course.description}</p>
                      <div className="container my-5 p-3">
                        {materi.map((materi) => (
                          <div
                            key={materi.mId}
                            className="flex text-left border rounded-lg border-neutral-500 border-lg px-3 py-2 my-3 mx-3 w-full"
                          >
                            <div className="border p-4 text-center bg-sky-700 rounded-full m-2">
                              <AiOutlineFileText
                                className="text-white"
                                size={30}
                              />
                            </div>
                            <div className="flex-grow px-3 py-4">
                              <Link to={`./${materi.mId}`}>
                                <h1 className="text-lg font-semibold">
                                  {materi.subject}
                                </h1>
                                <p className="text-sm text-gray-400">
                                  {materi.date}
                                </p>
                              </Link>
                            </div>
                            <div className="flex items-end my-5 mx-3">
                              <MarkButton />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
