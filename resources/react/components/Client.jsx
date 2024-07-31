import { React } from 'react';
import Account from './Account';
import { Link } from 'react-router-dom';

export default function Client({ client }) {

    return <section className='card m-1'>
        <div className='card-body'>
            <div className='d-flex justify-content-between'>
                <h5 className='card-title'>Cliente {client.id}</h5>
                <h5 className='card-title text-muted'>
                    <b>Tipo de identificación:</b> {client.identification_type.nombre}
                    <br />
                    <b>No. Identificación:</b> {client.numero_identificacion}
                    </h5>
            </div>
            <div className='card-text'><b>Razon Social:</b> {client.razon_social}</div>

            <div className='card-text'>Nombres: {client.nombres} {client.apellidos}</div>
            <p className='card-text'>Municipio: {client.municipio}</p>
            <hr />
            <span className='d-flex justify-content-between'>
                <h6>Cuentas asociadas</h6>
                <Link to={`/account?cliente_id=${client.id}`} className='btn btn-success btn-sm'>Abrir nueva cuenta</Link>
            </span>
            { client.accounts != null && client.accounts.map(account => <Account key={account.id} account={account} />)}
        </div>
    </section>;
}
