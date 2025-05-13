// src/components/NotFound.jsx
import React from "react";

const NotFound = () => {
  return (
    <div className="notfound_body">
      <h1 className="notfound_container">_404</h1>
      <p>
        Looks like you’ve followed a broken link or entered a URL that doesn’t
        exist on this site.
      </p>
      <a href="/">Go to Home</a>
    </div>
  );
};

export default NotFound;
