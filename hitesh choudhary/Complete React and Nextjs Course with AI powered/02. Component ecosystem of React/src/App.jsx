import "./App.css";
import CardProject from "./components/CardProject/CardProject";

function App() {
  return (
    <div className="p-2 flex gap-4 w-full">
      {/* <h1 className='text-blue-600 dark:text-sky-400 bg-slate-800 border-2 text-xl'>Hello we are integrating tailwind css in our project</h1> */}
      <CardProject />
      {/* Props 'properties' which we can pass as object an argument pass in function (component) which give access to pass-on data from  parent function (component) to child function (component) */}
      <CardProject /> 
      
    </div>
  );
}

export default App;
