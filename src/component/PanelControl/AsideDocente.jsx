import React from 'react'
import { NavLink,useNavigate } from "react-router-dom";

export const AsideDocente = () => {

    let navigate = useNavigate();
    return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a className="brand-link">
            <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
            <span className="brand-text font-weight-light">Mathis</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
            {/* -------------------------------------------------------------- */}
            {/* Sidebar Menu */}
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
                <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                    Estudiantes
                    <i className="right fas fa-angle-left" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive?'nav-link active':'nav-link'} to={'/Panel/estudiante'}><p>Listar estudiantes </p></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive?'nav-link active':'nav-link'} to={'/Panel/registro'}><p>Registrar</p></NavLink>
                    </li>
                </ul>
                </li>
                
                {/* -------------------------------------------------------------- */}
                <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                        Visualizar
                    <i className="right fas fa-angle-left" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive?'nav-link active':'nav-link'} to={'/Panel/registro'}><p>Trazabilidad</p></NavLink>                   
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive?'nav-link active':'nav-link'} to={'/Panel/registro'}><p>Notas</p></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive?'nav-link active':'nav-link'} to={'/Panel/registro'}><p>Logros</p></NavLink>
                    </li>
                </ul>
                </li>
                
                 {/* -------------------------------------------------------------- */}
                 <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                        Contenido
                    <i className="right fas fa-angle-left" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <NavLink className={({isActive})=> isActive?'nav-link active':'nav-link'} to={'/Panel/contenido'}><p>Listar contenido</p></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive?'nav-link active':'nav-link'} to={'/Panel/Examenes'}><p>Listar examenes</p></NavLink>                
                    </li>
                    
                </ul>
                </li>
            </ul>
            </nav>
            {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
    </aside>
    )
}
