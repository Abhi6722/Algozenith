import React from 'react';

const TextWithIcon = ({ iconClass, text }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 rounded-full flex items-center justify-center">
        <div className="w-10 h-10 bg-transparent border rounded-md flex items-center justify-center">
          <i className={iconClass}></i>
        </div>
      </div>
      <p className="text-white">{text}</p>
    </div>
  );
};

export default TextWithIcon;
