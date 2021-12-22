import React from 'react'
import {render} from 'react-dom'
import InputItem from './components/InputItem'
import SendButton from './components/SendButton'
 
function Login(){
    window.onload = () => {
        const $button = document.querySelector('.contain-button')
        const $form = document.getElementById('formdata')
        const $alert = document.getElementById('alert')
        $button.addEventListener('click', () => {
            const formData = new FormData($form)
            let count = 0
            for(let key of formData.keys()){
                if(formData.get(key) === ''){
                    $alert.textContent = 'Por favor completa todos los campos'
                    $alert.classList.remove('hidden')
                    setTimeout(() => {
                        $alert.classList.add('hidden')
                    }, 5000);
                    break
                }
                count++
            }
            if(formData.get('userpass') != formData.get('confPass')){
                $alert.textContent = 'Las contraseñas no coinciden, por favor inténalo de nuevo'
                    $alert.classList.remove('hidden')
                    setTimeout(() => {
                        $alert.classList.add('hidden')
                    }, 5000);
            }
            else if(count === 10){
                fetch('/register', {
                    method: 'POST',
                    body: formData,
                })
                .then(res => res.json())
                .then(data => {
                    if(data.refused){
                        $alert.textContent = data.error
                        $alert.classList.remove('hidden')
                        setTimeout(() => {
                            $alert.classList.add('hidden')
                        }, 5000);
                    }
                    else if(data.conf === 'register success'){
                        window.location.href = `${window.origin}/login`
                    }
                })
            }
        })
    }
    
    return(
        <div className="main-container">
            <form id="formdata" action='/register' method='post' encType='multipart/form-data'>
                <p className="alert hidden" id='alert'>Por favor completa todos los campos</p>
                <div className="form-register">
                    <div className="container-items">  
                        <InputItem name="name" id="email" placeholder="Nombre"/>
                        <InputItem name="email" id="email" placeholder="Direccion de correo"/>
                        <InputItem name="number" id="number" placeholder="Teléfono"/>
                        <InputItem name="city" id="city" placeholder="Ciudad"/>
                        <div className="content-input">
                            <input className='input-item password' type="password" name="userpass" placeholder="Contraseña"/>
                            <span className="unmask-eye show-text" id="showText" style={{display: "inline-block"}}></span>
                        </div>                        
                    </div>
                    <div className="container-items">
                        <InputItem name="lastname" id="lastname" placeholder="Apellido(s)"/>
                        <InputItem name="departament" id="departamento" placeholder="Departamento"/>
                        <InputItem name="direction" id="username" placeholder="Dirección"/>
                        <InputItem name="username" id="username" placeholder="Nombre del usuario"/>
                        <div className="content-input">
                            <input className='input-item password' type="password" name="confPass" placeholder="Confirmar contraseña"/>
                            <span className="unmask-eye show-text" id="showText" style={{display: "inline-block"}}></span>
                        </div>
                    </div>
                </div>
                <SendButton/>
            </form>
        </div>
    )
}
render(<Login/>, document.querySelector('main')); 