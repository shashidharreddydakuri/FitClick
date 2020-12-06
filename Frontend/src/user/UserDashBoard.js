// import React from "react";
// import Base from "../core/Base";

// const UserDashBoard = () => {
//   return (
//     <Base title="UserDashBoard page">
//       <h1>THis is UserDashBoard page</h1>
//     </Base>
//   );
// };

// export default UserDashBoard;
import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "../core/Base";
import Card from "../core/Card";
import { getProducts } from "../core/helper/coreapicalls";

export default function UserDashBoard() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
     <Base title="UserDashBoard page">
      <div className="row text-center">
        <h1 className="text-white">Exercise Assigned</h1>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
