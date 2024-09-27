import React from "react";
import SlidingUpText from "../../../Components/SlidingUpText/SlidingUpText";


const SecondSection = () => {
  return (
    <div className="secondSection">
      <SlidingUpText text={"What we do?"}></SlidingUpText>
      <div className="cards">
        <div className="card">
          <div className="topCard">
            <span>Website Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
