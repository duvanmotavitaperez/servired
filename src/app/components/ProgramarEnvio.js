import React from "react"
import obj from '../../public/css/styles.css'

export default function ProgramarEnvio () { 
    console.log(obj);
        return (
        <>
        <div id="layoutSidenav_content">
            <main>
            <div className='card'>
                    <div className='card-header'>
                        Disponibilidad
                    </div>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Fecha <input type="text" /> Hora <input type="text" />
                        </blockquote>
                    </div>
            </div>
            
            <div className='card'>
                    <div className='card-header'>
                        Dimensiones
                    </div>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Alto <input type="text" /> Ancho <input type="text" /> Peso <input type="text" /> Delicado <input type="checkbox" />
                        </blockquote>
                    </div>
            </div>

            <div className='card'>
                    <div className='card-header'>
                        Direccion de Recogida
                    </div>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Direccion <input type="text" /> Barrio <input type="text" /> Ciudad <input type="text" /> Departamento <input type="text" /><br/><br/> Nombre <input type="text" /> Documento <input type="text" />
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
            
            <button className='btn btn-secondary'>Programar</button>
            </main>
        </div>
        </>    
        );
    }