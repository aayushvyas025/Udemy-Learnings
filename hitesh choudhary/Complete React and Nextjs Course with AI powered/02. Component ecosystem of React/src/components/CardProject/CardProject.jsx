import React from "react";

function CardProject() {
  return (
    <div className="max-w-sm bg-slate-950 border-gray-200 border-b rounded-xl text-white shadow-xl">
      <img
        src="https://plus.unsplash.com/premium_photo-1791895316431-0089731d0bae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="Sample Image"
        className="rounded-t-xl mb-1 object-cover"
      />
      <div className="p-2">
        <h2 className="text-blue-600 text-xl">Card Title</h2>
        <p className="p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          tenetur suscipit delectus in iusto iste soluta fugiat quod aut et?
        </p>
        <button className="bg-white text-black px-4 py-1 hover:cursor-pointer hover:bg-slate-300 rounded-lg text-sm font-semibold mt-2">
          Preview
        </button>
      </div>
    </div>
  );
}

export default CardProject;
