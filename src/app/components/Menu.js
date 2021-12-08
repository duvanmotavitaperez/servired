import React from "react"
import obj from '../css/styles.module.css'

// 1. "sb-sidenav accordion sb-sidenav-dark"
// 2. "sb-sidenav-menu"
// 3. "nav"
// 4. "nav-link collapsed"
// 5. "sb-nav-link-icon"
// 6. "sb-sidenav-collapse-arrow"
// 7. "nav-link collapsed"
// 8. "sb-nav-link-icon"

// 1. id id="layoutSidenav">
// 2. id="layoutSidenav_nav"
// 3. id="sidenavAccordion"
export default function Menu () { 
console.log(obj);
    return (
    <div itemID={`${obj['#layoutSidenav']}`} > 
        <div itemID={`${obj['#layoutSidenav_nav']}`}>
            <nav className={`${obj['sb-sidenav']} ${obj['accordion']} ${obj['sb-sidenav-dark']}`} itemID={`${obj['#sidenavAccordion']}`}>
                <div className={`${obj['sb-sidenav-menu']}`}>
                    <div className={`${obj['nav']}`}>
                        <a className={`${obj['nav-link']} ${obj['collapsed']}`} href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className={`${obj['sb-nav-link-icon']}`}></div>
                            Programar Envio
                            <div className={`${obj['sb-sidenav-collapse-arrow']}`}><i class="fas fa-angle-down"></i></div>
                        </a>

                        <a className={`${obj['nav-link']} ${obj['collapsed']}`} href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div className={`${obj['sb-nav-link-icon']}`}></div>
                            Programar Recogida
                            <div className={`${obj['sb-sidenav-collapse-arrow']}`}><i class="fas fa-angle-down"></i></div>
                        </a>
                        <a className={`${obj['nav-link']} ${obj['collapsed']}`} href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div className={`${obj['sb-nav-link-icon']}`}></div>
                            Buscar Envio
                            <div className={`${obj['sb-sidenav-collapse-arrow']}`}><i class="fas fa-angle-down"></i></div>
                        </a>

                    </div>
                </div>
            </nav>
        </div>
    </div>
    );
}



