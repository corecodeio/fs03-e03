import { useState, useEffect } from "react";

const Form = () => {
  // const [nombre, setNombre] = useState("");
  // const [edad, setEdad] = useState("");
  const [formValues, setFormValues] = useState({});
  let x = 45;

  useEffect(() => {
    console.log("Hola desde el use effect");
    //FETCH DATA
  }, [formValues, x]);

  useEffect(() => {
    //HACER GET DE CARROS
  }, []);

  // const handleInputChange = (event) => {
  //   const input = event.target.value;
  //   setNombre(input);
  // };

  // const handleEdadChange = (event) => {
  //   const edad = event.target.value;
  //   setEdad(edad);
  // };

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Llamar a API para guardar los datos
    alert(
      `Me llamo ${formValues.primerNombre} y tengo ${formValues.edad} años.`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Primer nombre:
        <input
          type="text"
          name="primerNombre"
          value={formValues.primerNombre || ""}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Edad:
        <input
          type="number"
          name="edad"
          value={formValues.edad || ""}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Carro:
        <select name="carro" onChange={handleFormChange}>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
          <option value="Fiat">Fiat</option>
        </select>
      </label>
      <input type="submit" />
    </form>
  );
};
export default Form;
