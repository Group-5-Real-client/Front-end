import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./index.css";

function Product() {
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("price-asc");
  // const [searchTerm, setSearchTerm] = useState("");
  const data = [
    {
      id: "1",
      name: "Homemade",
      price: "7",
      Category: "Hygienic",
      image:
        "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261",
    },
    {
      id: "2",
      name: "Homemade",
      price: "6",
      Category: "Hygienic",
      image:
        "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261",
    },
    {
      id: "3",
      name: "Homemade",
      price: "6",
      Category: "Homemade",
      image:
        "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261",
    },
    {
      id:" 4",
      name: "Homemade",
      price: "4",
      Category: "Homemade",
      image:
        "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261",
    },
    {
      id: "5",
      name: "Homemade",
      price: "2",
      Category: "Recycling",
      image:
        "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261",
    },
    {
      id: "6",
      name: "Homemade",
      price: "9",
      Category: "Recycling",
      image:
        "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1559593291",
    },
    {
      id: "7",
      name: "Homemade",
      price: "9",
      Category: "Homemade",
      image:
      "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1559593291" ,
    },
    {
      id: "8",
      name: "Homemade",
      price: "5",
      Category: "Recycling",
      image:
        "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261",
    },
  ];
 
  const [products, setProducts] = useState(data);
  const getAllData = () => {
    setProducts(data);
  };
  const getHomemadeData = () => {
    const homemadeData = data.filter((item) => item.Category === "Homemade");
    setProducts(homemadeData);
  };

  const getRecyclingData = () => {
    const recyclingData = data.filter((item) => item.Category === "Recycling");
    setProducts(recyclingData);
  };

  const getHygienicData = () => {
    const hygienicData = data.filter((item) => item.Category === "Hygienic");
    setProducts(hygienicData);
  };
  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     baseURL: "https://api.escuelajs.co/api/v1/products",
  //   })
  //     .then(({ data }) => {
  //       console.log(data);
  //       setData(data);
  //       setLoading(true);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  // // const handleSearchChange = (event) => {
  // //   setSearchTerm(event.target.value);
  // // };
 const  handleCategoryChange = (event)=> {
    const selectedValue = event.target.value;
    window.location.href = selectedValue;
  }

  const getSortedProducts = () => {
    let sortedProducts = [...data];

    switch (sortOption) {
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "title-asc":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    // if (searchTerm) {
    //   sortedProducts = sortedProducts.filter((product) => {
    //     return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    //   });
    // }

    return sortedProducts;
  };

  return (
    <div className="Shop-container">
      <div className="products">
        <h1>Products</h1>
        <div className="categories-sort">
        <div className="Categories-links">
        <NavLink to="/Product" onClick={getAllData}> All Products</NavLink>
      <NavLink to="/FoodProduct" onClick={getHomemadeData}>
        HomeMade
      </NavLink>
      <NavLink to="/Recycling" onClick={getRecyclingData}>
        Recycling
      </NavLink>
      <NavLink to="/Hygienic" onClick={getHygienicData}>
        Hygienic
      </NavLink>
      </div>
          <div className="Categories-dropdown">
            <select id="categorySelect" onChange={handleCategoryChange}>
              <option value="/Product" style={{ display: "none" }}>
                Categories
              </option>
              <option value="/Product">All Products</option>
              <option value="/FoodProduct">HomeMade</option>
              <option value="/Recycling">Recycling</option>
              <option value="/Hygienic">Hygienic</option>
            </select>
          </div>

          {/* <div className="search-container">
          <input type="text" placeholder="Search..." onChange={handleSearchChange} />
          <button>Search</button>
        </div> */}
          <div className="sort-options">
            <label htmlFor="sort-select" className="sort">
              Sort by:
            </label>
            <select id="sort-select" onChange={handleSortOptionChange}>
              {/* <option value="price-asc" style={{display:"none"}}>Sort by:</option> */}
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
            </select>
          </div>
        </div>

        <div className="product-container">
        <div className="product-gallery">
   {getSortedProducts().map((product) => (
    <div className="item" key={product.id}>
      <div className="thumbnail">
        <img
          className="group"
          src={product.image}
          alt={product.name}
          width="363"
          height="363"
        />
        <div className="caption">
          <h4 className="group-inner">{product.name}</h4>
          <p className="lead">${product.price}</p>
        </div>
        <div className="btn-group">
          <NavLink to="/OneProduct" className="btn btn-details">
            View
          </NavLink>
          <NavLink to="/" className="btn btn-success">
            Add to Cart
          </NavLink>
        </div>
        <NavLink to="/" className="btn btn-icon">
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </div>
    </div>
  ))}

          </div>
        </div>
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#" class="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </div>
  );
}
export default Product;
