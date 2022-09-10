import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import {mobile} from '../responsive';

const Components = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 80px;
  display: felx;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
`;

const Language = styled.span`
  font-size: 14;
  curosr: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-item: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const Center = styled.div`
  flex: 1;
  aling-item: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 40px;
  white-space: nowrap;
`;

const Navbar = () => {
  return (
    <Components>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ELKO</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge overlap="rectangular" badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Components>
  );
};

export default Navbar;
