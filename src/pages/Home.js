import React from 'react';

function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <video autoPlay loop muted>
          <source src="path/to/your/video" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Home;