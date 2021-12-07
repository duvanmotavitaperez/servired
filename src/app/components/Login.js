import styles from "../css/login.module.css"
import React  from "react"
 
export default function Login(){
    window.onload = () => {
        const $form = document.getElementById('formdata')
        const $eye = document.getElementById('showText')
        const $textArea = document.querySelector('textarea')
        const $buttonSend = document.querySelector('.button-send')
        const $alert = document.querySelector('.alert')
        const $password = document.querySelector('.input-item.password')
        
        $eye.addEventListener('click', () => {
            $eye.classList.toggle('show-text')
        })
        $buttonSend.addEventListener('click', () => {
            const form = new FormData($form)
            const username = form.get('username')
            const pass = form.get('userpass')
            if(username == '' || pass == ''){
                $alert.classList.toggle('hidden')
                $textArea.addEventListener('focus', () => $alert.classList.add('hidden'))
            }
            else{
                fetch(`/main`, {
                    method: "POST",
                    body: form,
                }).then((response) => {
                    response.json()
                }).then(data => console.log(data))
            }
            
        })
        $form.addEventListener('submit', (event) => {
            event.preventDefault()
        })
    }
    
    return(
        <div className="main-container">
            <form id="formdata" method="post">
                <input type="hidden" value="{{token}}"/>
                <p className="alert hidden">Por favor completa todos los campos</p>
                <div className="content-input">
                    <textarea className='input-item' name="username" id="username" cols="1" rows="1" placeholder="Nombre del usuario" spellCheck="false"></textarea>
                </div>
                <div className="content-input">
                    <input className='input-item password' type="password" name="userpass" placeholder="Contraseña"/>
                    <span className="unmask-eye show-text" id="showText" style={{display: "inline-block"}}></span>
                </div>   
                <div className="contain-button">
                    <span className="button-send">
                        <i className="send fa fa-paper-plane" aria-hidden="true"></i>
                    </span>
                </div>       
            </form>
        </div>
    )
}