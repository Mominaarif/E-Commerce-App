import React from "react";

// Import local files
import {
  Container,
  Image,
  Title,
  Info,
  Button,
} from "../ComponentElements/CategoryItemElement";

function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOW NOW</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;
