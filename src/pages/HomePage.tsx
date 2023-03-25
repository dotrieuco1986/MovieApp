import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ListMovie from "../components/home/ListMovie";
import ModalProductInfo from "../components/home/ModalProductInfo";
import Product from "../models/Product";
import { ProductsContext } from "../store/ProductsProvider";

const HomePage = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const { products = [] } = state;
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
    poster_path: "",
    release_date: "",
    vote_average: "",
    quantity: 0,
  });
  const [isShowModalInfo, setIsShowModalInfo] = useState(false);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8bf1e096f4b4ce8f042aace7f62d4217&language=en-US&page=1").then((res) =>{
      console.log(res.data.results);
      dispatch({
        type: "ADD_PRODUCTS",
        payload: res.data.results,
      })
  });
  }, [dispatch]);

  const convertToMoney = (price: number) => {
    return price.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleShowModalInfo = () => {
    setIsShowModalInfo(true);
  };

  const handleCloseModalInfo = () => {
    setIsShowModalInfo(false);
  };
  return (
    <>
      <ListMovie
        products={products}
        setProduct={setProduct}
        convertToMoney={convertToMoney}
        handleShowModalInfo={handleShowModalInfo}
      />
    </>
  );
};

export default HomePage;
