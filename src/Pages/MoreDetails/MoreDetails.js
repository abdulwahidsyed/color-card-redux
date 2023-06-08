import { useLocation } from "react-router-dom";
import "./MoreDetails.css";
import { useSelector } from "react-redux";

export const MoreDetails = () => {
  const location = useLocation();

  const selectedImage = useSelector((state) => state.items.selectedImage);

  console.log("my selectedImage", selectedImage);

  return (
    <div>
      <h1>More Details</h1>
      <p>{selectedImage?.name}</p>
      <p>{selectedImage.moreDetails.age}</p>
    </div>
  );
};
