import React from 'react';

const Card1 = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src="./Images/" alt="Image" className="image" />
      </div>
      <div className="text-section">
        <h2>Text Section</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus commodo lacinia. Maecenas luctus, enim sit amet fermentum auctor, ex mauris feugiat neque, in varius odio lorem nec orci. Suspendisse interdum fermentum finibus.</p>
      </div>
    </div>
  );
};

export default Card1;
