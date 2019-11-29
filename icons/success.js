import React from 'react';

const Success = () => (
  <svg
    id="successAnimation"
    class="animated"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 70 70"
  >
    <circle
      id="successAnimationCircle"
      cx="35"
      cy="35"
      r="24"
      stroke="#22a053"
      stroke-width="2"
      stroke-linecap="round"
      fill="transparent"
    />
    <polyline
      id="successAnimationCheck"
      stroke="#22a053"
      stroke-width="2"
      points="23 34 34 43 47 27"
      fill="transparent"
    />
  </svg>
);

export default Success;
