import React from "react";
import { Link } from "react-router-dom";

export default function Account({ account }) {
    return (
        <ul className="list-group list-group-flush ">
            <li className="list-group-item">
                <div className="d-flex justify-content-between">
                    <span className="d-flex justify-content-between">
                        <b>Cuenta: </b> {account.cuenta}
                    </span>
                    <span>
                        <b>Saldo: </b> {account.saldo}
                    </span>

                    <span>
                        Ult. Movimiento: 2022-01-01 00:00
                        <br />
                        <b>Importe: </b> {account.saldo}
                    </span>
                </div>
                <div>
                    <Link to={`/transaction?account_id=${account.id}`} className="btn btn-secondary btn-sm">
                        Hacer transaccion
                    </Link>
                </div>
            </li>
        </ul>
    );
}
