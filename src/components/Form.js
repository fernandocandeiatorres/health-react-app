import React, { useEffect, useState } from "react";
import Results from "./Results";

export default function Form({ showForm }) {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const [maxPress, setMaxPress] = useState(null);
  const [minPress, setMinPress] = useState(null);

  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setShowResult(false);
    if (showForm === "IMC") {
      setMaxPress(null);
      setMinPress(null);
    }
    if (showForm === "PRESS") {
      setWeight(70);
      setHeight(170);
    }
  }, [showForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  if (!showForm) {
    return null;
  }
  if (showForm === "PRESS") {
    return (
      <>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col w-2/6 md:w-1/6"
        >
          <label className="text-center" htmlFor="minpress">
            Min Press
          </label>
          <input
            placeholder="Ex. 70"
            type="number"
            id="minpress"
            name="minpress"
            onChange={(e) => setMinPress(e.target.value)}
            className="h-10 bg-slate-900 border border-emerald-800 rounded-md focus:outline focus:outline-emerald-500 text-emerald-300 pl-2"
          />

          <label className="text-center mt-5" htmlFor="maxpress">
            Max Press
          </label>
          <input
            placeholder="Ex. 130"
            type="number"
            id="maxpress"
            name="maxpress"
            onChange={(e) => setMaxPress(e.target.value)}
            className="h-10 bg-slate-900 border border-emerald-800 rounded-md focus:outline focus:outline-emerald-500 text-emerald-300 pl-2"
          />

          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-emerald-500 text-slate-900 rounded-lg w-28 h-10 hover:bg-slate-900 hover:text-emerald-500 border-emerald-500 border transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
        {showResult && (
          <Results
            formType={showForm}
            minPress={minPress}
            maxPress={maxPress}
          />
        )}
      </>
    );
  }

  if (showForm === "IMC") {
    return (
      <>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col w-3/6 md:w-1/6"
        >
          <label className="text-center" htmlFor="weight">
            Weight{" "}
          </label>
          <input
            type="range"
            id="weight"
            name="weight"
            min="0"
            max="150"
            step="1"
            onChange={(e) => setWeight(e.target.value)}
            className="range bg-slate-900"
          />
          <output className="text-center">{weight}kg</output>

          <label className="text-center mt-5" htmlFor="height">
            Height{" "}
          </label>
          <input
            type="range"
            id="height"
            name="height"
            min="100"
            max="220"
            step="1"
            onChange={(e) => setHeight(e.target.value)}
            className="range bg-slate-900"
          />
          <output className="text-center">{height}cm</output>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-emerald-500 text-slate-900 rounded-lg w-28 h-10 hover:bg-slate-900 hover:text-emerald-500 border-emerald-500 border transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
        {showResult && (
          <Results formType={showForm} weight={weight} height={height} />
        )}
      </>
    );
  }
}
