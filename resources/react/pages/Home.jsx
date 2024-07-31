import React, { useEffect } from "react";
import Client from "../components/Client";
import { ToastContainer } from "react-toastify";

export default function HomePage() {
    const [clients, setClients] = React.useState([]);

    useEffect(() => {
        fetch("api/cliente")
            .then((response) => response.json())
            .then((data) => setClients(data));
    }, []);


    return <>
        <section className="container">
            {clients.map(client => <Client key={client.id} client={client} />)}
        </section>
        </>;
}
