import React from 'react';
import '../Styles/TextSlider.css';

function TextSlider() {
  const text = 'UI/UX Engineer & Frontend Developer';
  const count = 6;

  return (
    <div className="text-wrapper">
      {[...Array(count)].map((_, index) => (
        <h1 key={index}>{text}</h1>
      ))}
    </div>
    
  );
}

export default TextSlider;
