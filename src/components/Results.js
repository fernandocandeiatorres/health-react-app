import React from "react";

export default function Results({
  formType,
  maxPress,
  minPress,
  weight,
  height,
}) {
  const calculatePress = () => {
    console.log(minPress, maxPress);
    if (minPress < 60 && maxPress < 90) {
      return (
        <h4 className="text-2xl font-light text-center m-5">
          Você está com a pressão baixa.
        </h4>
      );
    } else if (maxPress > 140 && minPress > 90) {
      return (
        <h4 className="text-2xl font-light text-center m-5">
          Você está com a pressão alta.
        </h4>
      );
    } else {
      return (
        <h4 className="text-2xl font-light text-center m-5">
          Você está com a pressão normal.
        </h4>
      );
    }
  };

  if (formType === "IMC") {
    height = parseInt(height);
    weight = parseInt(weight);
  }

  const calculateIMC = () => {
    const imcHeight = height / 100;
    const imc = weight / imcHeight ** 2;
    if (imc < 18.5) {
      return (
        <h4 className="text-2xl font-light text-center m-5">
          Você está abaixo do peso.
        </h4>
      );
    }
    if (imc <= 24.9 && imc >= 18.5) {
      return (
        <h4 className="text-2xl font-light text-center m-5">
          Você está no peso normal.
        </h4>
      );
    }
    if (imc <= 29.9 && imc >= 25) {
      return (
        <h4 className="text-2xl font-light text-center m-5">
          Você está com sobrepeso
        </h4>
      );
    }
    if (imc > 29.9) {
      return (
        <h4 className="text-2xl font-light text-center m-5">
          Você está com obesidade.
        </h4>
      );
    }
  };
  const imcHeight = height / 100;
  const imc = weight / imcHeight ** 2;

  return (
    <div className="h-2/6 w-3/4 mt-12">
      <h1 className="text-4xl font-medium text-center mt-3">
        YOUR IMC RESULTS:
      </h1>
      <h2 className="text-4xl font-medium text-center mt-10">
        {formType === "IMC" && imc.toFixed(1)}
      </h2>
      {formType === "PRESS" && calculatePress()}
      {formType === "IMC" && calculateIMC()}
    </div>
  );
}
