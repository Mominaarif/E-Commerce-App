import React from "react";
import { Add, Remove } from "@mui/icons-material";

// Import local files
import Annnouncement from "../components/Annnouncement";
import Navbar from "../components/Navbar";
import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
  FilterColor,
  AddContainer,
  AmountContainer,
  Amount,
  Button
} from "../pagesElement/ProductElement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Product() {
  return (
    <Container>
      <Navbar />
      <Annnouncement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            rerum natus eligendi maxime animi nulla necessitatibus placeat aut
            amet officia, nemo consectetur recusandae tempore iste nostrum. Sunt
            modi ut recusandae.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color</FilterText>
                <FilterColor color="black" />
                <FilterColor color="blue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
              <FilterText>Size</FilterText>
              <Select>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
              <AmountContainer>
                  <Remove />
                  <Amount>1</Amount>
                  <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
