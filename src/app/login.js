import React from 'react'
import {render} from 'react-dom'
import InputItem from './components/InputItem'
import SendButton from './components/SendButton'
 
function Login(){
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
                <InputItem name="username" id="username" placeholder="Nombre del usuario"/>
                <div className="content-input">
                    <input className='input-item password' type="password" name="userpass" placeholder="Contraseña"/>
                    <span className="unmask-eye show-text" id="showText" style={{display: "inline-block"}}></span>
                </div>   
                 <SendButton/>
            </form>
        </div>
    )
}
render(<Login/>, document.querySelector('main')); 
