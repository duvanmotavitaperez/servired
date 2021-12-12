import React from "react"
import obj from '../../public/css/styles.css'

export default function ProgramarEnvio () { 
    console.log(obj);
        return (
        <>
        
             <div className={`${obj['card']}`}>
                    <div className={`${obj['card-header']}`}>
                        Disponibilidad
                    </div>
                    <div className={`${obj['card-body']}`}>
                        <blockquote className={`${obj['blockquote mb-0']}`}>
                            Fecha <input type="text" /> Hora <input type="text" />
                        </blockquote>
                    </div>
            </div>
            
            <div className={`${obj['card']}`}>
                    <div className={`${obj['card-header']}`}>
                        Dimensiones
                    </div>
                    <div className={`${obj['card-body']}`}>
                        <blockquote className={`${obj['blockquote mb-0']}`}>
                            Alto <input type="text" /> Ancho <input type="text" /> Peso <input type="text" /> Delicado <input type="checkbox" />
                        </blockquote>
                    </div>
            </div>

            <div className={`${obj['card']}`}>
                    <div className={`${obj['card-header']}`}>
                        Direccion de Recogida
                    </div>
                    <div className={`${obj['card-body']}`}>
                        <blockquote className={`${obj['blockquote mb-0']}`}>
                            Direccion <input type="text" /> Barrio <input type="text" /> Ciudad <input type="text" /> Departamento <input type="text" /><br/><br/> Nombre <input type="text" /> Documento <input type="text" />
                        </blockquote>
                    </div>
            </div>

            <div className={`${obj['card']}`}>
                    <div className={`${obj['card-header']}`}>
                        Direccion de Envio
                    </div>
                    <div className={`${obj['card-body']}`}>
                        <blockquote className={`${obj['blockquote mb-0']}`}>
                            Direccion <input type="text" /> Barrio <input type="text" /> Ciudad <input type="text" /> Departamento <input type="text" /><br/><br/> Nombre <input type="text" /> Documento <input type="text" />
                        </blockquote>
                    </div>
            </div>
            
            <button className={`${obj['btn']} ${obj['btn-secondary']}`}>Programar</button>
        </>
        );
    }