const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
app.use(cors());

const productsData = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 29.99,
    imageUrl:
      "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: 39.99,
    imageUrl:
      "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for Product 3",
    price: 49.99,
    imageUrl:
      "https://images.pexels.com/photos/3429783/pexels-photo-3429783.jpeg",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description for Product 4",
    price: 59.99,
    imageUrl:
      "https://images.pexels.com/photos/59830/melons-water-melons-fruit-green-59830.jpeg",
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description for Product 5",
    price: 69.99,
    imageUrl:
      "https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description for Product 6",
    price: 79.99,
    imageUrl:
      "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    name: "Product 7",
    description: "Description for Product 7",
    price: 89.99,
    imageUrl:
      "https://images.pexels.com/photos/12946318/pexels-photo-12946318.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    name: "Product 8",
    description: "Description for Product 8",
    price: 99.99,
    imageUrl:
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 9,
    name: "Product 9",
    description: "Description for Product 9",
    price: 109.99,
    imageUrl:
      "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg",
  },
  {
    id: 10,
    name: "Product 10",
    description: "Description for Product 10",
    price: 119.99,
    imageUrl:
      "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 11,
    name: "Product 11",
    description: "Description for Product 11",
    price: 129.99,
    imageUrl:
      "https://images.pexels.com/photos/165776/pexels-photo-165776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 12,
    name: "Product 12",
    description: "Description for Product 12",
    price: 139.99,
    imageUrl:
      "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];


app.get("/api/products", (req, res) => {
  try {
    const products = productsData;
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
