import { NavLink } from "react-router-dom";
import { useState ,useEffect} from "react";
import axios from 'axios'
import "./index.css";

function Product() {
 
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
      axios({
          method: 'GET',
          baseURL: 'https://api.escuelajs.co/api/v1/products',
        
        })
          .then(({ data }) => {
            console.log(data)
            setData(data)
            setLoading(true)
          })
          .catch(err => console.log(err))
  }, [])
  return (
    
    <div className="products">
      <h1>Products</h1>
      <div className="Categories-links">
        <NavLink to="/Product"> All Products</NavLink>
        <NavLink to="/">HomeMade</NavLink>
        <NavLink to="/">Recycling</NavLink>
        <NavLink to="/">Hygienic</NavLink>
      </div>
      <div className="product-container">
        {!loading && "Loading..."}
{!!data && data.length > 0 ? (
  <div className="product-gallery">
    {data.slice(0, 8).map((product) => {
      console.log(product);
      return (
        <div className="item" key={product.id}>
          <div className="thumbnail">
          <img className="group" src={product.images[0]} alt={product.title} width="100%" height="350" />

            <div className="caption">
              <h4 className="group-inner">{product.title}</h4>
              <p className="lead">${product.price}</p>
            </div>
            <div className="btn-group">
              <NavLink to="/" className="btn btn-details">
              View
              </NavLink>
              <NavLink to="/" className="btn btn-success">
                Add to Cart
              </NavLink>
            </div>
          </div>
        </div>
      );
    })}
  </div>
) : (
  <p>API did not provided any product, try again.</p>

)}


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
  );
}
export default Product;
