import React from "react"

export default function Menu () { 
    window.onload = () =>  {
        const script2  = document.createElement('script')
        script2.src = "/js/scripts.js"
        script2.async = true
        document.body.appendChild(script2)
    }
    return (
        <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading"></div>
                            <a className="nav-link" href="index.html">
                                <div className="sb-nav-link-icon"><i className="fa fa-home" aria-hidden="true"/></div>
                                Home
                            </a>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Opciones
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/programarEnvio">Programar Envio</a>
                                    <a className="nav-link" href="/BuscarEnvio">BusCar Envio</a>
                                    <a className="nav-link" href="/BuscarEnvio">Buscar Envio</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            
                            <div className="sb-sidenav-menu-heading">Configuración</div>
                            <a className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Estadisticas
                            </a>
                            <a className="nav-link" href="tables.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                          Servi Red
                    </div>
                </nav>
            </div>
    );
}
