import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [showForm, setShowForm] = useState(null);

  return (
    <div className="h-screen w-full bg-slate-900 text-white flex items-center flex-col">
      {/* HEADER */}
      <div className="h-1/6 flex items-center">
        <h1 className="text-3xl font-semibold md:text-4xl">Health Check-In</h1>
      </div>
      {/* BUTTONS */}
      <div className="h-24 flex items-start mt-5 justify-evenly w-full md:w-3/6">
        <button
          onClick={() => setShowForm("IMC")}
          className="bg-emerald-500 text-slate-900 rounded-lg w-24 h-10 hover:bg-slate-900 focus:bg-slate-900 focus:text-emerald-500 hover:text-emerald-500 border-emerald-500 border transition"
        >
          IMC
        </button>
        <button
          onClick={() => setShowForm("PRESS")}
          className="bg-emerald-500 text-slate-900 rounded-lg w-28 h-10 hover:bg-slate-900 hover:text-emerald-500 focus:bg-slate-900 focus:text-emerald-500 border-emerald-500 border transition"
        >
          PRESSÃO
        </button>
      </div>
      {/* FORM */}
      <Form showForm={showForm} />
      {/* RESULT */}
    </div>
  );
}

export default App;
