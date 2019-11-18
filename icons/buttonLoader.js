import React from 'react';

const ButtonLoader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    display="block"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
    style={{ margin: 'auto' }}
  >
    <circle
      cx="50"
      cy="50"
      r="32"
      fill="none"
      stroke="#333"
      strokeDasharray="50.26548245743669 50.26548245743669"
      strokeLinecap="round"
      strokeWidth="8"
      transform="rotate(133.739 50 50)"
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      ></animateTransform>
    </circle>
  </svg>
);

export default ButtonLoader;
