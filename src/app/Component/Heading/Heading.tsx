import React from "react";

interface HeadingProps {
  title: string;
 
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="">
      {/* Title with responsive sizing and animation */}
      <h3 className="text-2xl  font-bold uppercase   mb-4 animate-fade-in">
        {title}
        <span><span className="text-green-500 text-3xl  ml-2">→</span> </span>
      </h3>
     
    </div>
  );
};

export default Heading;
