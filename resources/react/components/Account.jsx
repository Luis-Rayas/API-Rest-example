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
                    {account.transactions.length > 0 && (
                        <span>
                        Ult. Movimiento: {account.transactions[0].fecha}
                        <br />
                        <b>Importe: </b> {account.transactions[0].monto}
                        </span>
                    )}
                </div>
                <div>
                    <Link to={`/transaction?cuenta_id=${account.id}`} className="btn btn-secondary btn-sm">
                        Hacer transaccion
                    </Link>
                </div>
            </li>
        </ul>
    );
}
