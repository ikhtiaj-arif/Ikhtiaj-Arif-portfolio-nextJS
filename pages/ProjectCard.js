import React from "react";
import design from "../public/design.png";

import Image from "next/image";

const ProjectCard = () => {
  return (
    <div>
      {" "}
      <div className="text-center shadow-lg rounded-xl my-10 hover:bg-gray-500">
        <Image src={design} width={100} height={100} className="mx-auto" />
        <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
        <div className="flex justify-evenly p-10">
            <button className="px-4 mr-2 py-2 w-full font-medium text-white rounded-xl bg-teal-700">Live Preview</button>
            <button className="px-4 ml-2 py-2 w-full font-medium text-white rounded-xl bg-blue-700">Repository</button>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;
