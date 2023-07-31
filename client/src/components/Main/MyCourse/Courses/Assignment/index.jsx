import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../Navbar";
import Sidebar from "../../../Sidebar";
import courses from "../../../../../courses.json";
import { AiOutlineFileText } from "react-icons/ai";
import AddWork from "./AddWork";
import "../../../../../index.css";
import AssignmentTable from "./AssignmentTable";
import BackButton from "../../../../Button/BackButton";

const Assignment = () => {
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
            <BackButton where={`/courses/${id}/${mId}`} />
            <div className="container flex ps-10 pt-12 border-solid">
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
                <AddWork />
                <div className="container my-4">
                  <h1 className="text-lg font-semibold my-2">
                    Assignment Status
                  </h1>
                  <AssignmentTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
