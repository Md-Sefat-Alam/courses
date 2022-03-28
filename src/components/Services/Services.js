import React, { useState, useEffect } from "react";
import ContentHeading from "../ContentHeading/ContentHeading";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("./ServiceData.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);
  return (
    <div>
      <div>
        <ContentHeading text={"services"} />
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 py-5">
        {/*  */}
        {serviceData.map((service) => {
          const { id, name, duration, fee, img } = service;
          return (
            <div
              key={id}
              className="flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl py-4 rounded"
            >
              <div style={{ maxWidth: "250px" }}>
                <img src={img} alt={name + " img"} />
              </div>
              <div>
                <p className="text-xl text-gray-800">
                  Course Name:{" "}
                  <span className="text-black font-bold capitalize">
                    {name}
                  </span>
                </p>
                <p className=" text-gray-800">
                  Duration:{" "}
                  <span className="text-black font-bold capitalize">
                    {duration}
                  </span>
                </p>
                <p className=" text-gray-800">
                  Course Fee:{" "}
                  <span className="text-black font-bold">{fee}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
