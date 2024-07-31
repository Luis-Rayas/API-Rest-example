import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Transaction() {
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: {
            cuenta_id: searchParams.get("cuenta_id"),
            cliente_id: null,
            tipo: null,
            importe: null,
        },
    });
    const [cuentas, setCuentas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("api/cuenta")
            .then((response) => response.json())
            .then((data) => {
                setCuentas(data.data)
                const clientIdFromQuery = searchParams.get("cuenta_id");
                if (clientIdFromQuery) {
                    setValue("cuenta_id", clientIdFromQuery);
                    data.data.map((cuenta) => {
                        if (cuenta.id == clientIdFromQuery) {
                            setValue("cliente_id", cuenta.cliente_id);
                            let nombre = cuenta.client.nombres + " " + cuenta.client.apellidos;
                            nombre.trim().length > 0 ? setValue("cliente", nombre) : setValue("cliente", cuenta.client.razon_social);
                        }
                    })
                }
            });
    }, []);

    const onSubmit = (form) => {
        fetch("api/transaccion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    throw new Error(data.error);
                }
                toast("Transacción creada");
                navigate("/");
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("No se pudo crear la transacción");
            });
    };

    const onChangeCuenta = (event) => {
        const id = event.target.value;
        if (id) {
            const cuenta = cuentas.find((cuenta) => cuenta.id == id);
            setValue("cliente_id", cuenta.cliente_id);
            let nombre = cuenta.client.nombres + " " + cuenta.client.apellidos;
            nombre.trim().length > 0 ? setValue("cliente", nombre) : setValue("cliente", cuenta.client.razon_social);
        } else {
            setValue("cliente_id", null);
            setValue("cliente", null);
        }
    };

    return (
        <section className="container">
            <h1>Nueva Transacción</h1>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            No. de Cuenta
                        </span>
                        <select
                            name="account_id"
                            className="form-select"
                            {...register("cuenta_id", { required: true })}
                            onChange={onChangeCuenta}
                        >
                            <option value="">-- Seleccione --</option>

                            {cuentas.map((cuenta) => (
                                <option key={cuenta.id} value={cuenta.id}>
                                    {cuenta.id}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errors.cuenta?.type === "required" && (
                        <small className="text-danger">
                            La cuenta es requerida
                        </small>
                    )}
                </div>
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            Cliente
                        </span>
                        <input type="hidden" name="cliente_id" {...register("cliente_id", { required: true })} />
                        <input type="text" className="form-control disabled"  {...register("cliente")} readOnly disabled/>
                    </div>
                    {errors.cuenta?.type === "required" && (
                        <small className="text-danger">
                            El cliente debe tener una cuenta asignada
                        </small>
                    )}
                </div>
                <hr />
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="tipo"
                        value="retiro"
                        {...register("tipo", { required: true })}
                    />
                    <label className="form-check-label">
                        Retiro
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="tipo"
                        value="consignacion"
                        {...register("tipo", { required: true })}
                    />
                    <label className="form-check-label">
                        Consignacion
                    </label>
                </div>
                {errors.tipo?.type === "required" && (
                        <small className="text-danger">
                            EL tipo de transaccion es requerido
                        </small>
                )}

                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            Importe
                        </span>
                        <input
                            type="number"
                            name="importe"
                            className="form-control"
                            placeholder="0.00"
                            {...register("importe", { required: true, min: 1 })}
                        />
                    </div>
                    {errors.importe?.type === "required" && (
                        <small className="text-danger">
                            El importe es requerido
                        </small>
                    )}
                    {errors.importe?.type === "min" && (
                        <small className="text-danger">
                            El importe debe ser mayor a 0
                        </small>
                    )}
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                        Crear
                    </button>
                </div>
            </form>
        </section>
    );
}
