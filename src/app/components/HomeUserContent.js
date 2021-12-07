import React from "react";
import obj from '../css/styles.module.css'

export default function HomeUserContent () { 

        return (
            
        <div >
            <div className={`${obj['col-xl-8']} ${obj['col-md-6']}`}>
                <div className={`${obj['card']} ${obj['text-dark']} ${obj['bg-light']} ${obj['mb-3']}`}>
                    <div className={`${obj['card-body']}`}>Order 1</div>
                    <div className={`${obj['card-footer']} ${obj['d-flex']} ${obj['align-items-center']} ${obj['justify-content-between']}`}>
                        <a className={`${obj['card-footer']} ${obj['text-dark']} ${obj['stretched-link']}`} href="#">Rastrear</a>
                        <a className={`${obj['card-footer']} ${obj['text-dark']} ${obj['stretched-link']}`} href="#">Cancelar</a>
                    </div>
                </div>
            </div>
            <div className={`${obj['col-xl-8']} ${obj['col-md-6']}`}>
                <div className={`${obj['card']} ${obj['text-dark']} ${obj['bg-light']} ${obj['mb-3']}`}>
                    <div className={`${obj['card-body']}`}>Order 2</div>
                    <div className={`${obj['card-footer']} ${obj['d-flex']} ${obj['align-items-center']} ${obj['justify-content-between']}`}>
                        <a className={`${obj['card-footer']} ${obj['text-dark']} ${obj['stretched-link']}`} href="#">Rastrear</a>
                        <a className={`${obj['card-footer']} ${obj['text-dark']} ${obj['stretched-link']}`} href="#">Cancelar</a>
                    </div>
                </div>
            </div>
            <div className={`${obj['col-xl-8']} ${obj['col-md-6']}`}>
                <div className={`${obj['card']} ${obj['text-dark']} ${obj['bg-light']} ${obj['mb-3']}`}>
                    <div className={`${obj['card-body']}`}>Order 3</div>
                    <div className={`${obj['card-footer']} ${obj['d-flex']} ${obj['align-items-center']} ${obj['justify-content-between']}`}>
                        <a className={`${obj['card-footer']} ${obj['text-dark']} ${obj['stretched-link']}`} href="#">Rastrear</a>
                        <a className={`${obj['card-footer']} ${obj['text-dark']} ${obj['stretched-link']}`} href="#">Cancelar</a>
                    </div>
                </div>
            </div>
            <div className={`${obj['col-xl-8']} ${obj['col-md-6']}`}>
                <div className={`${obj['card']} ${obj['text-dark']} ${obj['bg-light']} ${obj['mb-3']}`}>
                    <div className={`${obj['card-body']}`}>Order 4</div>
                    <div className={`${obj['card-footer']} ${obj['d-flex']} ${obj['align-items-center']} ${obj['justify-content-between']}`}>
                        <a className={`${obj['card-footer']} ${obj['text-dark']} ${obj['stretched-link']}`} href="#">Rastrear</a>
                        <a className={`${obj['card-footer']} ${obj['text-dark']} ${obj['stretched-link']}`} href="#">Cancelar</a>
                    </div>
                </div>
            </div>
        </div>
    
        );
    }