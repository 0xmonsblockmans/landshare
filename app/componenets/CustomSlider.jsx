"use client";
import { useState } from "react";

const CustomSlider = (className) => {
  const [value, setValue] = useState(50); // Default value is set to 50%

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-[300px]">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="custom-slider w-full h-2 rounded-lg appearance-none focus:outline-none"
        style={{
          background: `linear-gradient(to right, #61CD81 ${value}%, #E5E7EB ${value}%)`,
        }}
      />
    </div>
  );
};

export default CustomSlider;
