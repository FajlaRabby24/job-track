import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

const Modal = ({ isOpen, setIsOpen, job, website }) => {
  const {
    bannerImage,
    description,
    id,
    jobType,
    location,
    requirements,
    salary,
    title,
  } = job;
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50 "
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-xl">
        <DialogPanel className="max-w-5xl grid grid-cols-2 gap-4 space-y-4 px-5 py-4 rounded-xl bg-gradient-to-r from-primary to-base-300">
          <img
            src={bannerImage}
            alt="jobImage"
            className="rounded-xl h-full object-cover"
          />
          <div className="">
            <h3 className="title text-3xl mb-2">{title}</h3>
            <div className="space-y-1">
              <p className="text-accent font-semibold">Job Type: {jobType}</p>
              <p className="text-accent font-semibold">Location: {location}</p>
              <p className="text-accent font-semibold">Salay: {salary}</p>
              <p className="text-accent font-semibold">{description}</p>
            </div>
            <h4 className="font-semibold text-2xl mb-2 mt-3 text-accent ">
              Requirements
            </h4>
            {requirements.map((item, index) => (
              <div key={index}>
                <p className="text-accent ">
                  <span className="font-medium text-accent">{index + 1}. </span>
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div></div>
          <div className="flex justify-end full  gap-4 ">
            <a href={website} target="_blank">
              <button
                className="btn text-white  bg-gradient-to-br from-primary to-secondary border-0 btn-lg rounded-full"
                // onClick={() => setIsOpen(false)}
              >
                Apply
              </button>
            </a>
            <button
              className="btn text-white bg-gradient-to-br from-primary to-secondary border-0 btn-lg rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
