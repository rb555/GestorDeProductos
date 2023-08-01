create database productos;

create database gestor_productos;

create table productos(
    id int not null primary key,
    producto varchar,
    descripcion text,
    costo decimal,
    precio decimal
);

insert into productos values
    (1, 'laptop', 'asus tuf 2060', 14600, 16600),
    (2, 'tv', 'samsumg 20pulgadas smart', 5000, 7000);