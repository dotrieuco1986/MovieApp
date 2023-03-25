import { useState } from "react";
import { Button } from "react-bootstrap";
import ListReview from "../../components/post/ListReview";

const Post = () => {
  const [isAdd, setIsAdd] = useState(false);

  const handleShowAddReview = () => {
    setIsAdd(true);
  };
  const handleHideAddReview = () => {
    setIsAdd(false);
  };
  return (
    <div className="container pt-5">
      <Button variant="primary my-2" onClick={handleShowAddReview}>
        Add review
      </Button>
      <ListReview />
      {/* <Outlet /> */}
    </div>
  );
};

export default Post;
