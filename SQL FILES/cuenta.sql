-- public.cuenta definition

-- Drop table

-- DROP TABLE public.cuenta;

CREATE TABLE public.cuenta (
	id serial4 NOT NULL,
	cuenta varchar NULL,
	cliente_id int4 NULL,
	saldo float4 DEFAULT 0 NULL,
	CONSTRAINT newtable_pk PRIMARY KEY (id)
);
