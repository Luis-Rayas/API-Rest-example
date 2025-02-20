import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <main className="container-fluid">
                <nav className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <Link
                                to="/"
                                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                            >
                                <span className="fs-5 d-none d-sm-inline">
                                    Menu
                                </span>
                            </Link>
                            <ul
                                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                                id="menu"
                            >
                                <li className="nav-item">
                                    <NavLink
                                        to={"/"}
                                        className="nav-link align-middle px-0"
                                    >
                                        <i className="fs-4 bi-house"></i>
                                        <span className="ms-1 d-none d-sm-inline">
                                            Pagina inicial
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to={"/account"}
                                        className="nav-link align-middle px-0"
                                    >
                                        <i className="fs-4 bi-house"></i>
                                        <span className="ms-1 d-none d-sm-inline">
                                            Crear nueva cuenta
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to={"/transaction"}
                                        className="nav-link align-middle px-0"
                                    >
                                        <i className="fs-4 bi-house"></i>
                                        <span className="ms-1 d-none d-sm-inline">
                                            Realizar transaccion
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                    <section className="col py-3">
                        <Outlet />
                    </section>
                </nav>
            </main>
        </>
    );
}
