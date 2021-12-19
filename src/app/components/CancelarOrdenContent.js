import React from "react";
import styles from '../css/styles.module.css';
import obj from '../../public/css/styles.css'



export default function CancelarOrden () { 
    console.log(obj);

            return (
        <>

             <div className='card'>
                    <div className='card-header'>
                       <center>Detalle orden</center>
                    </div>
            </div>
            <form>
            <div className='card-body'>
                        <blockquote className='blockquote mb-0'>
                            Observacion<br/>

                           <center> <input type="textArea"  /></center>
                        </blockquote>
                    </div>           

            
          <center> <button className='btn btn-seconday' >Cancelar orden</button></center>
          </form> 
        </>
        );
    }