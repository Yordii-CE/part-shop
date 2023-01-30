CREATE DATABASE CAR_SHOP;
USE CAR_SHOP;

CREATE TABLE USER(
	id int primary key auto_increment,
    name varchar(30),    
    email varchar(30) unique,
    password varchar(40)
);

-- PRODUCT
CREATE TABLE PRODUCT(
	id int primary key auto_increment,
    code varchar(20),
    name varchar(30),
    description varchar(30),    
    stock int,    
    price float,
    
    brandId int,    
    modelId int,    
    classificationId int,
    providerId int    
);

CREATE TABLE BRAND(
	id int primary key auto_increment,
    name varchar(30)    
);

CREATE TABLE MODEL(
	id int primary key auto_increment,
    name varchar(30)
);

CREATE TABLE CLASSIFICATION(
	id int primary key auto_increment,
    name varchar(30)
);



CREATE TABLE PROVIDER(
	id int primary key auto_increment,
    name varchar(30),    
    phone varchar(40)    
);


CREATE TABLE SALE(
	id int primary key auto_increment,
    date datetime,    
    number int,
    
    employeeId int,
    clientId int,
    productId int
);

CREATE TABLE EMPLOYEE(
	id int primary key auto_increment,
    name varchar(30),    
    phone varchar(40)    
);

CREATE TABLE CLIENT(
	id int primary key auto_increment,
    name varchar(30),    
    phone varchar(40)    
);

CREATE TABLE TICKET(
	id int primary key auto_increment,
    date datetime,    
    price float,
    amount int,
    address varchar(30),
    given int,
	changing int,
    
    
    productId int,
    employeeId int,
    clientId int 
);



CREATE TABLE REPAYMENT(
	id int primary key auto_increment,
    description varchar(90),
    reason varchar(40),
    state varchar(5),
    price float,
    amount int,
    moneyRepayment float,
    
    productId int,
    clientId int 
);

CREATE TABLE QUOTATION(
	id int primary key auto_increment,
    date datetime,
    amount int,
    
    productId int,
    clientId int 
);


-- FOREIGN KEYS
ALTER TABLE TICKET
	ADD CONSTRAINT FK_TICKET_productId FOREIGN KEY (productId) REFERENCES PRODUCT(id),
	ADD CONSTRAINT FK_TICKET_employeeId FOREIGN KEY (employeeId) REFERENCES EMPLOYEE(id),
	ADD CONSTRAINT FK_TICKET_clientId FOREIGN KEY (clientId) REFERENCES CLIENT(id);

ALTER TABLE REPAYMENT
	ADD CONSTRAINT FK_REPAYMENT_productId FOREIGN KEY (productId) REFERENCES PRODUCT(id),	
	ADD CONSTRAINT FK_REPAYMENT_clientId FOREIGN KEY (clientId) REFERENCES CLIENT(id);
    
ALTER TABLE PRODUCT
	ADD CONSTRAINT FK_PRODUCT_brandId FOREIGN KEY (brandId) REFERENCES BRAND(id),
	ADD CONSTRAINT FK_PRODUCT_modelId FOREIGN KEY (modelId) REFERENCES MODEL(id),
	ADD CONSTRAINT FK_PRODUCT_classificationId FOREIGN KEY (classificationId) REFERENCES CLASSIFICATION(id),
	ADD CONSTRAINT FK_PRODUCT_providerId FOREIGN KEY (providerId) REFERENCES PROVIDER(id);

ALTER TABLE SALE
	ADD CONSTRAINT FK_SALE_employeeId FOREIGN KEY (employeeId) REFERENCES EMPLOYEE(id),
	ADD CONSTRAINT FK_SALE_clientId FOREIGN KEY (clientId) REFERENCES CLIENT(id),
	ADD CONSTRAINT FK_SALE_productId FOREIGN KEY (productId) REFERENCES PRODUCT(id);


-- STORE PROCEDURES

delimiter //
drop procedure IF EXISTS GET_SALES //
CREATE PROCEDURE GET_SALES()
begin
	select 
		  SALE.id,		  
		  CONVERT(SALE.date, CHAR) date,
		  SALE.number,
		  EMPLOYEE.name 'employee',
          CLIENT.name 'client',
          PRODUCT.name 'product'
    from SALE
    join EMPLOYEE on SALE.employeeId = EMPLOYEE.id
    join CLIENT on SALE.clientId = CLIENT.id
    join PRODUCT on SALE.productId= PRODUCT.id;
end//
delimiter //

delimiter //
drop procedure IF EXISTS GET_QUOTATIONS //
CREATE PROCEDURE GET_QUOTATIONS()
begin
	select 
		  QUOTATION.id,
		  CONVERT(QUOTATION.date, CHAR) date,
		  QUOTATION.amount,
          PRODUCT.name 'product',
          CLIENT.name 'client'        
    from QUOTATION
    join PRODUCT on QUOTATION.productId = PRODUCT.id
    join CLIENT on QUOTATION.clientId = CLIENT.id;    
end//
delimiter //

delimiter //
drop procedure IF EXISTS GET_REPAYMENT //
CREATE PROCEDURE GET_REPAYMENT()
begin
	select 
		  REPAYMENT.id,
		  REPAYMENT.description,
          REPAYMENT.reason,
          REPAYMENT.state,
          REPAYMENT.price,
          REPAYMENT.amount,
          REPAYMENT.moneyRepayment,
          PRODUCT.name 'product',
          CLIENT.name 'client'
    from REPAYMENT
    join PRODUCT on REPAYMENT.productId = PRODUCT.id
    join CLIENT on REPAYMENT.clientId = CLIENT.id;    
end//
delimiter //
call GET_REPAYMENT();


-- PRODUCTS PROCEDURES
delimiter //
drop procedure IF EXISTS GET_PRODUCTS //
CREATE PROCEDURE GET_PRODUCTS()
begin
	select 
		  PRODUCT.id,
          PRODUCT.code,
		  PRODUCT.name,
		  PRODUCT.description,
		  PRODUCT.stock,
		  PRODUCT.price,
		  BRAND.name 'brand',
		  MODEL.name 'model',
		  CLASSIFICATION.name 'classification',
		  PROVIDER.name 'provider'
    from PRODUCT 
    join BRAND on PRODUCT.brandId = BRAND.id
    join MODEL on PRODUCT.modelId = MODEL.id
    join CLASSIFICATION on PRODUCT.classificationId = CLASSIFICATION.id
    join PROVIDER on PRODUCT.providerId = PROVIDER.id;
end//
delimiter //

-- TICKETS PROCEDURES
delimiter //
drop procedure IF EXISTS GET_TICKETS //
CREATE PROCEDURE GET_TICKETS()
begin
	select 
		  TICKET.id,
		  CONVERT(TICKET.date, CHAR) date,
          TICKET.price,
          TICKET.amount,
          TICKET.address,

          PRODUCT.name 'product',
          EMPLOYEE.name 'employee',
          CLIENT.name 'client',
          
          TICKET.given,
          TICKET.changing
    from TICKET
    join PRODUCT on TICKET.productId = PRODUCT.id
    join EMPLOYEE on TICKET.employeeId = EMPLOYEE.id
    join CLIENT on TICKET.clientId = CLIENT.id;    
end//
delimiter //



-- insert 
insert user (name, email, password) values ('admin', 'admin@gmail.com', '12345');


-- tests
call GET_TICKETS();


