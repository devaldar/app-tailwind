import React from "react";

export const Services = () => {
  const data = [
    {
      title: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugit praesentium totam libero omnis! Eligendi sit corporis sunt officia ut.",
    },
    {
      title: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugit praesentium totam libero omnis! Eligendi sit corporis sunt officia ut.",
    },
    {
      title: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugit praesentium totam libero omnis! Eligendi sit corporis sunt officia ut.",
    },
    {
      title: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugit praesentium totam libero omnis! Eligendi sit corporis sunt officia ut.",
    },
    {
      title: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugit praesentium totam libero omnis! Eligendi sit corporis sunt officia ut.",
    },
    {
      title: "test",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugit praesentium totam libero omnis! Eligendi sit corporis sunt officia ut.",
    },
  ];
  return (
    <section className="mt-52">
      <h3 className="mb-10 text-3xl font-semibold text-center">
        What is TestMaster
      </h3>
      <div className="grid max-w-6xl gap-5 px-12 mx-auto lg:grid-cols-3 md:grid-cols-2">
        {data.map(({ title, description }, index) => (
          <div className="flex flex-col items-center justify-center w-full max-w-sm m-auto text-center">
            <h6 className="mb-2 text-lg">{title}</h6>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
