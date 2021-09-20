CREATE TABLE `user` (
   `id` INT NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `password` VARCHAR(70) NOT NULL,
   `first_name` VARCHAR(50),
   `last_name` VARCHAR(50),
   `adresses_id` INT,
   `tel` VARCHAR(20),
   `image` VARCHAR(255),
   `rol_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `rol` (
   `id` INT NOT NULL,
   `name` VARCHAR(10) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product` (
   `id` INT NOT NULL,
   `name` VARCHAR(100) NOT NULL,
   `description` TEXT NOT NULL,
   `price` INT NOT NULL,
   `discount` INT,
   `image` VARCHAR(255),
   `brand_id` INT NOT NULL,
   `category_id` INT NOT NULL,
   `subcategory_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `adresses` (
   `id` INT NOT NULL,
   `province` VARCHAR(50) NOT NULL,
   `city` VARCHAR(50) NOT NULL,
   `street` VARCHAR(100) NOT NULL,
   `postal_code` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `brand` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `subcategory` (
   `id` INT NOT NULL,
   `name` VARCHAR(50) NOT NULL,
   `category_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `cart` (
   `id` INT NOT NULL,
   `user_id` INT NOT NULL,
   `quantity` INT NOT NULL,
   `ticket_id` INT NOT NULL,
   `product_id` INT NOT NULL,
   `total` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `ticket` (
   `id` INT NOT NULL,
   `date` DATE NOT NULL,
   `total` INT NOT NULL,
   `payment_method_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `payment_method` (
   `id` INT NOT NULL,
   `name` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `user` ADD CONSTRAINT `FK_04ac2993-fec0-491e-8e2c-fc91cfdf228f` FOREIGN KEY (`rol_id`) REFERENCES `rol`(`id`);

ALTER TABLE `user` ADD CONSTRAINT `FK_4b03f145-b5b0-4c2e-92c6-76ffed736160` FOREIGN KEY (`adresses_id`) REFERENCES `adresses`(`id`);

ALTER TABLE `product` ADD CONSTRAINT `FK_c5881065-17c7-4782-9248-71486fbc5efe` FOREIGN KEY (`brand_id`) REFERENCES `brand`(`id`);

ALTER TABLE `product` ADD CONSTRAINT `FK_9b521cad-5273-433c-aaed-2b576c1fb238` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`);

ALTER TABLE `product` ADD CONSTRAINT `FK_389786f0-e201-4007-9159-6c5bd62455c4` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory`(`id`);

ALTER TABLE `subcategory` ADD CONSTRAINT `FK_5b74ec3d-a5f0-438a-9162-249ce03b6cdb` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`);

ALTER TABLE `cart` ADD CONSTRAINT `FK_0ee7b5ba-5951-4094-a983-4415da8993dd` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);

ALTER TABLE `cart` ADD CONSTRAINT `FK_ca1c069a-9541-4028-9d2e-4221e7fcddc9` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`);

ALTER TABLE `cart` ADD CONSTRAINT `FK_1501dad3-4655-4e5e-875c-e3c47d37e7df` FOREIGN KEY (`ticket_id`) REFERENCES `ticket`(`id`);

ALTER TABLE `ticket` ADD CONSTRAINT `FK_dfacefc6-af20-4009-b7f2-f0663d4fbeb0` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_method`(`id`);
