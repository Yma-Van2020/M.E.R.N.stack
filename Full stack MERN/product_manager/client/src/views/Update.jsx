import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import DeleteButton from "../components/DeleteButton";

const Update = () => {
  const history = useHistory();
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id).then((res) => {
      setProduct(res.data);
      setLoaded(true);
    });
  }, []);

  const updateProduct = (product) => {
    axios
      .put("http://localhost:8000/api/product/" + id, product)
      .then((res) => {
        console.log(res.data);
        history.push("/product");
      })
      .catch((err) => console.error(err));
  };

  const removeFromDom = (prodId) => {
    setProduct(product.filter((product) => product._id !== prodId));
  };

  return (
    <div>
      <h3>Update a Product</h3>
      {loaded && (
        <>
          <ProductForm
            onSubmitProp={updateProduct}
            initialTitle={product.length > 0 ? product[0].title : null}
            initialPrice={product.length > 0 ? product[0].price : null}
            initialDes={product.length > 0 ? product[0].description : null}
          />
          <DeleteButton prodId={id} successCallback={() => removeFromDom(id)} />
        </>
      )}
    </div>
  );
};

export default Update;
