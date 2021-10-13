import React from "react";

// Import local files
import { popularProducts } from "../data";
import Product from "./Product";
import { Container } from '../ComponentElements/ProductsElement';

function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
