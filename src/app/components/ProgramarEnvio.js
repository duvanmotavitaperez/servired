import React from "react"
import obj from '../../public/css/styles.css'

export default function ProgramarEnvio () { 
    console.log(obj);
        return (
        <>
        <div id="layoutSidenav_content">
            <form action='/ProgramarEnvio' method="post">
            <main>
            <div className='card'>
                    <div className='card-header'>
                        Disponibilidad
                    </div>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Fecha <input type="text" name="fecha"/> Hora <input type="text" name="hora"/>
                        </blockquote>
                    </div>
            </div>
            
            <div className='card'>
                    <div className='card-header'>
                        Dimensiones
                    </div>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Alto <input type="text" name="alto"/> Ancho <input type="text" name="ancho"/> Peso <input type="text" name="peso"/> Delicado <input type="checkbox" />
                        </blockquote>
                    </div>
            </div>

            <div className='card'>
                    <div className='card-header'>
                        Direccion de Recogida
                    </div>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Direccion <input type="text" name="direcRecogida"/> Barrio <input type="text" name=""/> Ciudad <input type="text" /> Departamento <input type="text" /><br/><br/> Nombre <input type="text" /> Documento <input type="text" />
                        </blockquote>
                    </div>
            </div>

            <div className='card'>
                    <div className='card-header'>
                        Direccion de Envio
                    </div>
                    <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Direccion <input type="text" name="direcEnvio"/> Barrio <input type="text" name="direccion"/> Ciudad <input type="text" name="ciudad"/> Departamento <input type="text" name="departamento"/><br/><br/> Nombre <input type="text" name="nombre"/> Documento <input type="text" name="documento"/>
                        </blockquote>
                    </div>
            </div>
            
            <button className='btn btn-secondary'>Programar</button>
            </main>
            </form>
        </div> 
        </>    
        );
    }