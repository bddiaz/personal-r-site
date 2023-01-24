CREATE TABLE sales(
	order_id int NOT NULL,
    costumer_id int NOT NULL,
    order_items_id int NOT NULL, 
    date_placed VARCHAR(6) NOT NULL,
    date_due VARCHAR(6) NOT NULL,
    PRIMARY KEY (order_id)
    
);

select * from sales;

CREATE TABLE order_items(
	order_id int NOT NULL,
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
    FOREIGN KEY (order_id) references sales(order_id)
);

select * from order_items;

ALTER TABLE sales 
ADD UNIQUE (costumer_id);

ALTER TABLE sales 
auto_increment =1;

CREATE TABLE costumers(
	costumer_id int NOT NULL,
    first_name varchar(255),
    last_name varchar(255),
    phone_number varchar(255),
    email varchar(255),
	FOREIGN KEY (costumer_id) REFERENCES sales(costumer_id)
);

CREATE TABLE receipts(
	order_id INT NOT NULL,
    costumer_id INT NOT NULL,
    payment_method VARCHAR(4),
    payment_status VARCHAR(6),
    FOREIGN KEY (order_id) REFERENCES sales(order_id),
    FOREIGN KEY (costumer_id) REFERENCES sales(costumer_id)
);
