import { NavLink } from "react-router-dom";
import Products from "../../Component/Products"
import Category from "../../Component/Category";

import "./Product.css";
function Product() {
  return (
    <div className="Shop-container">
      {/* <Category/> */}
     <Products/>
     </div>
  );
}
export default Product;
