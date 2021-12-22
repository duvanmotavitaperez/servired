import React from "react"
import obj from '../css/styles.module.css'

export default function DetalleRastreoContent () { 
    console.log(obj);
        return (
        <>
             <div className='card'>
                    <div className='card-header'>
                        Dimensiones
                    </div>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Alto<input type="text" /> Ancho <input type="text" /> Peso <input type="text" /> Delicado <input type="radio" />
                        </blockquote>
                    </div>
            </div>
            
            <div className='card'>
                    <div className='card-header'>
                        Dirección de recogida
                    </div>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Direccion<input type="text" /> Barrio <input type="text" /> Ciudad <input type="text" /> Departamento <input type="text" />
                        </blockquote>
                    </div>
            </div>


            <div className='card'>
                    <div className='card-header'>
                        Direccion de Envio
                    </div>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Direccion <input type="text" /> Barrio <input type="text" /> Ciudad <input type="text" /> Departamento <input type="text" /><br/><br/> Nombre <input type="text" /> Documento <input type="text" />
                        </blockquote>
                    </div>
            </div>
            
            <button className='btn btn-seconday' >Volver</button>
        </>
        );
    }