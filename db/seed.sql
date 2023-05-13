\c meals_dev;

INSERT INTO users (name, weight_goal, calorie_goal) VALUES
 ('Ryan L', 170, 2500),
 ('Diandre M', 15, 1700);

INSERT INTO meals (name, image, serving_size, serving_size_unit, calories, total_fat, carbs, fiber, sugar, protein, user_id, meal_type) VALUES
 ('Turkey Sandwich', 'https://www.valyastasteofhome.com/wp-content/uploads/2022/01/Turkey-Sandwich-Recipe.jpg', 1, 'sandwich', 324, 13, 29, 2, 3.8, 21, 1, 'lunch'),
 ('Bacon Egg and Cheese', 'https://static01.nyt.com/images/2022/08/24/dining/as-bacon-egg-and-cheese-1/as-bacon-egg-and-cheese-1-threeByTwoMediumAt2X-v3.jpg', 1, 'sandwich', 430, 23, 30, 2.3, 4.8, 24, 1, 'breakfast'),
 ('Mixed Nuts','https://cdn.shopify.com/s/files/1/0549/9007/8130/products/305_700x700.jpg?v=1644814719', 1, 'oz', 168, 15, 7.2, 2.6, 1.4, 4., 1, 'snack');
