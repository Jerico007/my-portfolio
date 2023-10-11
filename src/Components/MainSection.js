import react from "react";

import "./MainSection.css";

const MainSection = ({heading , paragraph}) => {
  return (
    <div className="main-section">
      <h2>{heading}</h2>
      <p>{paragraph}
      </p>
    </div>
  );
};

export default MainSection;