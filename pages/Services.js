import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div>
      <div className="text-center mt-20 max-w-3xl mx-auto">
        <h3 className="text-3xl py-1">Services I Offer</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          Lorem ipsum dolor, sit <span className="text-teal-500">amet</span>{" "}
          consectetur adipisicing elit. Reiciendis porro blanditiis quos at
          culpa sapiente itaque tenetur adipisci sequi optio distinctio error
          quidem repellendus, accusamus amet, unde ex! Eveniet, delectus.
          Facere, ipsum id adipisci magni unde expedita odio ipsa placeat!
        </p>

        <p className="text-md py-5 leading-8 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          asperiores excepturi enim cum quo ad ab similique officia quibusdam
          minus?
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      </div>
    </div>
  );
};

export default Services;
