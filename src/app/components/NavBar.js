import React from "react"
import obj from '../css/styles.module.css'


 // 2. <!--"btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"-->
 // 3. "fas fa-bars"
 // 4. "d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
 // 5. "input-group"
 // 6. "form-control"
 // 7. "btn btn-primary"
 // 8. "fas fa-search"
 // 9. "navbar-nav ms-auto ms-md-0 me-3 me-lg-4"
 // 10. "nav-item dropdown"
 // 11. "nav-link dropdown-toggle"
 // 12. "fas fa-user fa-fw"
 // 13. "dropdown-menu dropdown-menu-end"
 // 14. "dropdown-item"
export default function NavBar () { 
console.log(obj);
    return (
        
        <nav className = {`${obj['sb-topnav']} ${obj['navbar']} ${obj['navbar-expand']} ${obj['navbar-dark']} ${obj['bg-dark']}`} >
            
            
            
            <button className={`${obj['btn']} ${obj['btn-link']} ${obj['btn-sm']} ${obj['order-1']} ${obj['rder-lg-0']} ${obj['me-4']} ${obj['me-lg-0']}`} id="sidebarToggle" href="#!"><i className={`${obj['fas']} ${obj['fa-bars']}`}></i></button>
          
            <form className={`${obj['d-none']} ${obj['d-md-inline-block']} ${obj['form-inline']} ${obj['ms-auto']} ${obj['me-0']} ${obj['me-md-3']} ${obj['my-2']} ${obj['my-md-0']}`}>
                <div className={`${obj['input-group']}`}>
                    <input className={`${obj['form-control']}`} type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className={`${obj['btn']} ${obj['btn-primary']}`} id="btnNavbarSearch" type="button"><i className={`${obj['fas']} ${obj['fa-search']}`}></i></button>
                </div>
            </form>
            
            <ul className={`${obj['navbar-nav']} ${obj['ms-auto']} ${obj['ms-md-0']} ${obj['me-3']} ${obj['me-lg-4']}`}>
                <li className={`${obj['nav-item']} ${obj['dropdown']}`}>
                    <a className={`${obj['nav-link']} ${obj['dropdown-toggle']}`} id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className={`${obj['fas']} ${obj['fa-user']} ${obj['fa-fw']}`}></i></a>
                    <ul className={`${obj['dropdown-menu']} ${obj['dropdown-menu-end']}`} aria-labelledby="navbarDropdown">
                        <li><a className={`${obj['dropdown-item']}`} href="#!">Settings</a></li>
                        <li><a className={`${obj['dropdown-item']}`} href="#!">Activity Log</a></li>
                        <li><hr className={`${obj['dropdown-divider']}`} /></li>
                        <li><a className={`${obj['dropdown-item']}`} href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

    );
}



