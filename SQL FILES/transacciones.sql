-- public.transacciones definition

-- Drop table

-- DROP TABLE public.transacciones;

CREATE TABLE public.transacciones (
	id serial4 NOT NULL,
	fecha timestamp NULL,
	cliente_id int4 NULL,
	cuenta_id int4 NULL,
	monto float4 NULL,
	CONSTRAINT transacciones_pk PRIMARY KEY (id)
);
