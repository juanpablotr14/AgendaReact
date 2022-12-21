import React, { Fragment } from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const FormularioAdd = ({ dispatch }) => {

    const [data, setData] = useState({ nombre: "", numero: "" });

    const { nombre, numero } = data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const actionAdd = {
        type: "add",
        payload: {
            id: uuid(),
            nombre: nombre,
            numero: numero
        },
    };

    const handleAdd = () => {
        dispatch(actionAdd);
    };


    return (

        <Fragment>

            <div className="container">

                <label className="mx-1 d-grid gap-2" style={{ width: "100%" }}>
                    Nombre: {" "}
                    <input onChange={handleChange} name="nombre" type="text" value={nombre} className="form-control" autoComplete="off"></input>
                </label>

                <label className="mx-1 d-grid gap-2" style={{ width: "100%" }}>
                    Número: {" "}
                    <input onChange={handleChange} name="numero" type="text" value={numero} className="form-control" autoComplete="off"></input>
                </label>

                <div className="mx-1 d-grid gap-2" style={{ width: "100%" }}>
                    <button onClick={handleAdd} className="btn btn-info mt-2 mb-3">Agregar</button>
                </div>

            </div>

        </Fragment>

    );

};

export default FormularioAdd;