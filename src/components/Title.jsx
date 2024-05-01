import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div>
      <h2 className="text-center text-xl md:text-4xl  mt-5  font-bold">{title}</h2>
      <div className="bg-gray-600 h-1 mb-5 w-24 mx-auto rounded-full "></div>
      <h3 className="text-center text-gray-400 ">{subtitle}</h3>
    </div>
  );
}

export default Title
