import React from "react";
import CardProject from "./CardProject";

function CardGrid() {
  return (
    <div className="flex w-full gap-2 justify-evenly">
      <CardProject title="React Course" />
      <CardProject
        title="NodeJS Course"
        image="https://plus.unsplash.com/premium_photo-1791895316506-7a71bf3d50f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
      />
      <CardProject title="Python Course" buttons={["Buy", "Preview"]} />
    </div>
  );
}

export default CardGrid;
