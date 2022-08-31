import React from "react";
import { CloudIcon } from "@heroicons/react/24/solid";
export const Exams = () => {
  const list = ["Azure", "AWS", "GCP", "Oracle", "IBM", "Salesforce", "Linux"];
  return (
    <section className="flex justify-center mt-56 align-center">
      <div className="w-[1200px] h-72 bg-neutral-800/50  rounded-lg py-10">
        <h3 className="w-full text-2xl text-center">Exams include:</h3>
        <div className="flex flex-row items-center justify-between max-w-3xl mx-auto mt-7">
          {list.map((item) => (
            <div key={item} className="flex flex-col items-center">
              <div className="flex w-16 h-16 m-4 shadow-inner shadow-pink-300 bg-neutral-900 rounded-xl ">
                <CloudIcon className="h-10 m-auto text-md" />
              </div>
              <div className="">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
