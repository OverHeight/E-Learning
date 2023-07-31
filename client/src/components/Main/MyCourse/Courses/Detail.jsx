import React from "react";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import { AiOutlineFileText } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import courses from "../../../../courses.json";
import BackButton from "../../../Button/BackButton";

const Detail = () => {
  const { id, mId } = useParams();
  const courseId = Number(id);
  const mIdValue = Number(mId);

  const course = courses.find((course) => course.id === courseId);
  const materi = course.details.find((item) => item.mId === mIdValue);

  return (
    <div className="container">
      <div className="flex w-screen">
        <div className="w-2/12 sticky">
          <Sidebar />
        </div>
        <div className="w-10/12">
          <Navbar />
          <div className="w-full flex pe-24">
            <BackButton where={`/courses/${id}`} />
            <div className="container flex ps-10 pt-12">
              <div className="container p-3">
                <div className="container flex mx-auto">
                  <div className="border p-3 text-center bg-sky-700 rounded-full me-3 my-2">
                    <AiOutlineFileText className="text-white" size={25} />
                  </div>
                  <div className="my-3">
                    <h1 className="text-md font-semibold">
                      Materi: {materi.subject}
                    </h1>
                    <h1 className="text-xs text-gray-400 font-extralight">
                      Date: {materi.date}
                    </h1>
                  </div>
                </div>

                <div className="container border"></div>
                <div className="container flex border border-neutral-700 rounded-xl my-5 p-3">
                  <p className="text-sm my-2">{materi.description}</p>
                </div>
                <div className="bg-sky-700 text-center my-2 p-3 rounded-lg w-36 justify-end">
                  <Link to={`./assignment`}>
                    <h1 className="text-md text-white font-semibold">
                      Assignment
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
