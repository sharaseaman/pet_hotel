CREATE TABLE pet_hotel (
	id serial PRIMARY KEY,
	name varchar (23),
	breed varchar (23),
	color varchar (23),
	checkedIn boolean DEFAULT false);
	
INSERT INTO pet_hotel (name, breed, color, checkedIn) 
VALUES ('Atom', 'Border Collie', 'Blue', false),
('Yves', 'Poodle', 'Pink', true);

INSERT INTO pet_hotel (name, breed, color)
VALUES ('Cujo', 'Llama', 'White');