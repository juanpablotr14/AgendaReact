import React, { useReducer, useEffect, useState } from 'react';
import { ContactosReducer } from '../reducers/ContactosReducer';
import FormularioAdd from './FormularioAdd';
import TablaContactos from './TablaContactos';


const contactos = [];
const init = () => {
    const personas = localStorage.getItem("personas");
    return personas ? JSON.parse(personas) : [];
};

const Contactos = () => {

    const [state, dispatch] = useReducer(ContactosReducer, contactos, init);

    useEffect(() => {
        localStorage.setItem("personas", JSON.stringify(state));
    }, [state])

    const [formVeiw, setFormView] = useState(false);

    return (

        <div className="container mt-3" id="fondo">

            <button onClick={() => setFormView(!formVeiw)} className="btn btn-success mb-3" >{formVeiw ? "- Cerrar" : "+ Agregar Contacto"}</button>
            {formVeiw && <FormularioAdd dispatch={dispatch}></FormularioAdd>}
            <TablaContactos contactos={state} dispatch={dispatch}></TablaContactos>

        </div >

    );

};

export default Contactos;