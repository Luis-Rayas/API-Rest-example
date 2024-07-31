import { react, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function NewAccount() {
    let [searchParams, setSearchParams] = useSearchParams();
    let [clients, setClients] = useState([]);
    let {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
    } = useForm({
        defaultValues: {
            cuenta: searchParams.get("cuenta"),
            cliente_id: searchParams.get("cliente_id"),
        },
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetch("api/cliente")
            .then((response) => response.json())
            .then((data) => {
                setClients(data)
                const clientIdFromQuery = searchParams.get("cliente_id");
                if (clientIdFromQuery) {
                setValue("cliente_id", clientIdFromQuery);
                }
            });
    }, []);

    const onSubmit = (form) => {
        fetch("api/cuenta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cuenta: form.cuenta,
                cliente_id: form.cliente_id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    throw new Error(data.error);
                }
                console.log(data);
                toast("Cuenta creada");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                toast.error("No se pudo crear la cuenta");
            });
    };

    return (
        <div className="container">
            <h1>Nueva cuenta</h1>
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            No. De cuenta
                        </span>
                        <input
                            type="text"
                            autoComplete="off"
                            className="form-control"
                            placeholder="####"
                            name="cuenta"
                            {...register("cuenta", { required: true })}
                        />
                    </div>
                    {errors.cuenta?.type === "required" && (
                        <small className="text-danger">
                            El número de cuenta es requerido
                        </small>
                    )}
                </div>
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text">
                            Cliente asociado
                        </span>
                        <select
                            name="cliente_id"
                            id="cliente_id"
                            className="form-select"
                            {...register("cliente_id", { required: true,  })}
                        >
                            <option value="">Seleccionar</option>
                            {clients.map((client) => (
                                <option key={client.id} value={client.id}
                                >
                                    {typeof client.razon_social === "string" &&
                                    client.razon_social.length > 0
                                        ? client.razon_social
                                        : client.nombres +
                                          " " +
                                          client.apellidos}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errors.cliente_id?.type === "required" && (
                        <small className="text-danger">
                            El cliente es requerido
                        </small>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">
                    Crear cuenta
                </button>
            </form>
        </div>
    );
}
