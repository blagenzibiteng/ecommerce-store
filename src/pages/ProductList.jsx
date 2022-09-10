import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footter";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  margin: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;

const Option = styled.option``;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Gaming Equipment</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>

          <Select>
            <Option disabled selected>
              Categories
            </Option>
            <Option>PC Peripherals</Option>
            <Option>Consoles</Option>
            <Option>Chairs</Option>
            <Option>Mobile Accessories</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Brand
            </Option>
            <Option>Sony</Option>
            <Option>Microsoft</Option>
            <Option>Acer</Option>
            <Option>Dell</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
