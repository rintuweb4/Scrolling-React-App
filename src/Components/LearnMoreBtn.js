import React from "react";

export default function LearnMoreBtn(props) {
  return (
    <>
      <button className="learnMoreBtn btn text-white m-auto">
        {props.children}
      </button>
    </>
  );
}
