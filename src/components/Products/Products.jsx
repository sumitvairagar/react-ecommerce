import React from 'react';
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
    { id: 1, name: "Shoes", description: "Running Shoes", price: "$5", image: "https://images.pexels.com/photos/1599005/pexels-photo-1599005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    { id: 2, name: "Macbook", description: "Apple MacBook", price: "$5", image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
]

const Products = () => {
    return (
        <main>
            <Grid container justify={"center"} spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}></Product>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;