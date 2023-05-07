import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faPlus,
  faMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./index.css";

function AddToCart({ product }) {
  const [showBox, setShowBox] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [products, setProducts] = useState([]);  // Define products state
  const [loading, setLoading] = useState(false); // Define loading state

  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     price: 10,
  //     quantity: 1,
  //     image: "https://placekitten.com/70/70",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     price: 20,
  //     quantity: 2,
  //     image: "https://placekitten.com/70/70",
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     price: 30,
  //     quantity: 3,
  //     image: "https://placekitten.com/70/70",
  //   },
  // ]);
  const [isMobile, setIsMobile] = useState(false);

  const handleIconClick = () => {
    setShowBox(!showBox);
  };

  const handleCloseClick = () => {
    setShowBox(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);
    const handleResize = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addListener(handleResize);
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  useEffect(() => {
    if (showBox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showBox]);

  const handleQuantityChange = (e, item) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0) {
      setItems(
        items.map((i) => (i.id === item.id ? { ...i, quantity: quantity } : i))
      );
    }
  };

  const addItem = (item) => {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      setItems(
        items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item) => {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem.quantity > 1) {
      setItems(
        items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    } else {
      setItems(items.filter((i) => i.id !== item.id));
    }
  };

  const deleteItem = (item) => {
    setItems(items.filter((i) => i.id !== item.id));
  };

  const priceFormatter = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };


  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [products, loading]); // Add missing dependencies


  return (
    <>
      {isMobile && <div className="mobileBackground" />}
      <div className="addCardContainer">
        <FontAwesomeIcon
          className="addCardIcon"
          icon={faStore}
          onClick={handleIconClick}
        />
        {showBox && (
          <div className={`addCardBox ${isMobile ? "mobileBox" : ""}`}>
             <button className="closeButton" onClick={handleCloseClick}>
              X
            </button>
            <h2>Add to Cart</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <span>
                    {item.name} ({priceFormatter(item.price)})
                  </span>
                  <div className="quantityBox">
                    <button onClick={() => removeItem(item)}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      type="number"
                      className="quantityInput"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(e, item)}
                      placeholder={`Quantity: ${item.quantity}`}
                    />
                    <button onClick={() => addItem(item)}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>

                  <button onClick={() => deleteItem(item)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <span className="price">
                    {priceFormatter(item.quantity * item.price)}
                  </span>
                </li>
              ))}
            </ul>
            <p>Total: {priceFormatter(getTotalPrice())}</p>
            <button className="addCardButton">Add to cart</button>
            <button className="clearCardButton">Clear cart</button>
          </div>
        )}
      </div>
    </>
  );
}

export default AddToCart;
