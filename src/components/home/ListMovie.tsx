import { Dispatch, SetStateAction } from "react";
import Product from "../../models/Product";
import SkeletonProductCard from "./SkeletonProductCard"
interface Props {
  products?: Product[];
  setProduct: Dispatch<SetStateAction<Product>>;
  convertToMoney: (price: number) => string;
  handleShowModalInfo: () => void;
}

const ListMovie = ({
  products,
  setProduct,
  convertToMoney,
  handleShowModalInfo,
}: Props) => {
  const handleClick = (product: Product) => {
    setProduct(product);
    handleShowModalInfo();
  };

  return (
    <div className="row pt-5 m-3">
      {products && products.length ? (
        products.map((product) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-xl-2 mb-3"
            key={product.id}
          >
            <div className="card p-3 customCard">
              <img
                src={`https://image.tmdb.org/t/p/w500/${product.poster_path}`}
                height="200px"
                className="rounded"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-truncate">{product.title}</p>
                <p className="text-right text-danger ">
           99
                </p>
                <button
                  className="btn btn-danger"
                  onClick={function () {
                    handleClick(product);
                  }}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          {products?.length}
          <SkeletonProductCard />
          <SkeletonProductCard />
          <SkeletonProductCard />
          <SkeletonProductCard />
          <SkeletonProductCard />
          <SkeletonProductCard />
        </>
      )}
    </div>
  );
};

export default ListMovie;
