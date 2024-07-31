-- public.cliente definition

-- Drop table

-- DROP TABLE public.cliente;

CREATE TABLE public.cliente (
	id serial4 NOT NULL,
	nombres varchar NULL,
	apellidos varchar NULL,
	razon_social varchar NULL,
	tipo_identificacion_id int4 NULL,
	municipio varchar NULL,
	numero_identificacion varchar NULL,
	CONSTRAINT cliente_pk PRIMARY KEY (id)
);

INSERT INTO public.cliente (nombres,apellidos,razon_social,tipo_identificacion_id,municipio,numero_identificacion) VALUES
	 ('Juan Alfonso','Perez Castro','',1,'Bogotá','80123456'),
	 ('Maria deñ Pilar','Rodriguez Sanchez','',1,'Medellin','52919717'),
	 ('','','Zapatos La Feria',2,'Cali','900222556');
