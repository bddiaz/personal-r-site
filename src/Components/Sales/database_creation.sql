CREATE TABLE sales(
	order_id int auto_increment  NOT NULL,
    costumer_id int NOT NULL,
    order_items_id int NOT NULL, 
    date_placed VARCHAR(6) NOT NULL,
    date_due VARCHAR(6) NOT NULL,
    PRIMARY KEY (order_id)
    
);


CREATE TABLE order_items(
	order_items_id int auto_increment NOT NULL,
    order_size int,
    pork_quantity int,
    beans_quantity int,
    mixed_quantity int,
    spinach_quantity int,
    jalapeno_quantity int, 
    loroco_quantity int,
    side1_quantity int, 
    side2_quantity int,
    notes TEXT,
    PRIMARY KEY(order_items_id)



CREATE TABLE costumers(
	costumer_id int auto_increment NOT NULL,
    first_name varchar(255),
    last_name varchar(255),
    phone_number varchar(255),
    email varchar(255),
    PRIMARY KEY(costumer_id)
);

CREATE TABLE receipts(
    recepit_id INT auto_increment NOT NULL;
	order_id INT,
    costumer_id INT NOT NULL,
    payment_method VARCHAR(4),
    payment_status VARCHAR(6),
    FOREIGN KEY (order_id) REFERENCES sales(order_id),
    FOREIGN KEY (costumer_id) REFERENCES sales(costumer_id)
);
