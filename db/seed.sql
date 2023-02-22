
\c leaf_services; 

-- INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES
-- ('Strawberries', 20, 10, 0, true, 'https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900'),
-- ('Raspberries', 16, 4, 0, true, 'https://picsum.photos/id/102/300/300'),
-- ('Honey Covered Granola', 30, 12, 22, false, 'https://picsum.photos/id/312/300/300'),
-- ('New Wave Nuts', 11, 55, 5, true, 'https://picsum.photos/id/139/300/300'),
-- ('Raw Onions & Turnips', 11, 9, 2, true, 'https://picsum.photos/id/292/300/300'),
-- ('Healthy Birthday Cake Square', 4, 8, 19, false, 'https://content.nutrisystem.com/images/products/alc/large/BirthdayCakeSquare_L.jpg');

-- CREATE TABLE snacks (
-- id SERIAL PRIMARY KEY,
-- name TEXT NOT NULL,
-- desc TEXT NOT NULL,
-- starting_rate INT DEFAULT 0 ,
-- add_service TEXT NULL, 
-- add_servicePrice INT DEFAULT 0, 
-- add_service2 TEXT NULL, 
-- add_service2Price INT DEFAULT 0,
-- image TEXT DEFAULT'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
-- );

INSERT INTO services (name, descript, starting_rate, add_service, add_serviceprice, add_service2, add_service2price, date_service, image) VALUES
('Mobile Notary Public','will travel to notarize any document needed', 20, 'per signature', 2.50,'', 0, '2023-2-20', 'https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900'),
('Online Notary Public','will notarize any document uploaded', 2.50, 'Loan Documents', 30,'Each add. document', 5,'2023-2-21', 'https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900'),
('Real Estate Loan Document Modification','will travel to notarize and modify Real Estate Loan Document', 100, '', 0,'', 0,'2023-2-22', 'https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900'),
('Real Estate Loan Document Application','will travel to notarize and assist in creating a Real Estate Loan Application Document', 100, '', 0,'', 0,'2023-2-23', 'https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900'),
('Real Estate HELOC','will travel to assist in creating and notorizing Real Estate Home equity line of credit', 125, '', 0,'', 0,'2023-2-24', 'https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900'),
('Real Estate Cash Deals','will travel to notarize and assist in Real Estate Cash Deals', 125, '', 0,'', 0, '2023-2-25','https://image.cnbcfm.com/api/v1/image/106657061-1597086951668-taxtime.jpeg?v=1609957898&w=1600&h=900');

-- use advanced image search to choose images that are square (aspect ratio)
-- https://www.google.com/advanced_image_search