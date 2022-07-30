import { useState } from "react";
import Carro from "./Carro";
import Informacion from "./Informacion";

const Garage = () => {
  const [carros, setCarros] = useState([
    {
      modelo: "Hilux",
      color: "rojo",
    },
    {
      modelo: "Corolla",
      color: "negro",
    },
    {
      modelo: "Altia",
      color: "negro",
    },
  ]);

  const carrosComponent = carros.map((carro, index) => {
    return (
      <Carro
        key={`${index}-carro-${carro.modelo}`}
        modelo={carro.modelo}
        color={carro.color}
      />
    );
  });

  const eliminarUltimoCarro = () => {
    const newCarros = carros.slice(carros.length - 1, 1);
    setCarros(newCarros);
  };

  //UUID
  return (
    <>
      <h1>Estos son los carros de mi garage:</h1>

      {carros.length === 0 && <p>No hay carros en el garage.</p>}
      {carros.length === 0 ? (
        <Informacion texto={"No hay carros en el garage."} />
      ) : (
        carrosComponent
      )}
      <button
        onClick={() => {
          eliminarUltimoCarro();
        }}
      >
        Eliminar ultimo carro
      </button>
      {/* <Carro modelo={"Hilux"} color={"Rojo"} />
      <Carro modelo={"Corolla"} color={"Negro"} /> */}
    </>
  );
};

export default Garage;
