import React from "react";
import Clients from "../components/Shop/Clients";
import ProductsCards from "../components/Shop/ProductCards";
import ShopCards from "../components/Shop/ShopCards";

function ShopPage() {
  return (
    <>
      <ShopCards />
      <ProductsCards />
      <Clients />
    </>
  );
}

export default ShopPage;
