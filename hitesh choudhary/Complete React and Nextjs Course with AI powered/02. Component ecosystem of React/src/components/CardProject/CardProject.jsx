import React from "react";

/***
 * ? What is Components in React
 * The components are the functions or classes which use to create modular and reusable UI's which takes arguments as props and return JSX , After the react 16 version mainly components are implement with the help of functions only.
 *
 * ? What is JSX ?
 *  JSX is the combination of HTML and Javascript XML to help to write html markup elements inside the javascript.
 */

function CardProject(props) {
  // Here we can destructure the props which we can do in params also
  const { title, image, buttons = ["preview", "buy"] } = props;
  return (
    <div className="max-w-sm bg-slate-950 border-gray-200 border-b rounded-xl text-white shadow-xl">
      <img
        src={
          image
            ? image
            : "https://plus.unsplash.com/premium_photo-1791895316431-0089731d0bae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        }
        alt="Sample Image"
        className="rounded-t-xl mb-1 object-cover"
      />
      <div className="p-2">
        <h2 className="text-blue-600 text-xl">{title}</h2>
        <p className="p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          tenetur suscipit delectus in iusto iste soluta fugiat quod aut et?
        </p>
        <div className="flex gap-2">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="bg-white text-black px-4 py-1 hover:cursor-pointer hover:bg-slate-300 rounded-lg text-sm font-semibold mt-2"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
