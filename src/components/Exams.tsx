import React from "react";
import { CloudIcon } from "@heroicons/react/24/solid";
export const Exams = () => {
  const list = ["Azure", "AWS", "GCP", "Oracle", "IBM", "Salesforce", "Linux"];
  const exams = [
    { name: "Azure", logo: "azure", twColor: "hover:shadow-blue-500" },
    { name: "AWS", logo: "aws", twColor: "hover:shadow-amber-400" },
    { name: "GCP", logo: "google", twColor: "hover:shadow-green-500" },
    { name: "Oracle", logo: "oracle", twColor: "hover:shadow-red-400" },
    { name: "Salesforce", logo: "salesforce", twColor: "hover:shadow-sky-500" },
  ];
  return (
    <section className="flex justify-center mt-48 align-center">
      <div className="w-3/4 py-10 rounded-lg max-w-7xl md:bg-neutral-800/50">
        <h3 className="w-full text-2xl text-center">Exams include:</h3>
        <div className="flex flex-row flex-wrap items-center justify-center max-w-md mx-auto md:max-w-3xl md:justify-between sm:flex-nowrap mt-7">
          {exams.map(({ name, logo, twColor }) => (
            <div key={name} className="flex flex-col items-center">
              <div
                className={`flex w-20 h-20 p-4 m-4 shadow-inner shadow-blue-300  ${twColor}  transition-all duration-200 bg-neutral-900 rounded-xl cursor-pointer`}
              >
                {/* <CloudIcon className="h-10 m-auto text-md" /> */}
                <img
                  src={`images/logos_${logo}.png`}
                  className="object-contain"
                />
              </div>
              <div className="">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
