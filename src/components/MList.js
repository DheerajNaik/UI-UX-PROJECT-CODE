import React from "react";
import "./MenuItems.css";
import Fade from "react-reveal/Fade";
function MList({ prod, addToCart }) {
  console.log(prod);
  return (
    <div>
      <Fade bottom cascase={true}>
        <ul className="products">
          {prod.map((product) => (
            <li key={product.id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title} />

                  <p className="para">{product.title}</p>
                </a>
                <div className="product-price">
                  <div>€ {product.price}</div>
                  <button
                    onClick={() => addToCart(product)}
                    className="button primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Fade>
    </div>
  );
}

export default MList;
