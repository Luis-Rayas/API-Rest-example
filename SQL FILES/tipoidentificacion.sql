-- public.tipoidentificacion definition

-- Drop table

-- DROP TABLE public.tipoidentificacion;

CREATE TABLE public.tipoidentificacion (
	id serial4 NOT NULL,
	nombre varchar NULL,
	CONSTRAINT tipoidentificacion_pk PRIMARY KEY (id)
);
