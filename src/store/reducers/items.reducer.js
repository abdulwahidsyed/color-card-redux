import i1 from "../../assets/i1.jpg";
import i2 from "../../assets/i2.jpg";
import i3 from "../../assets/i3.jpg";
import i4 from "../../assets/i4.jpg";
import i5 from "../../assets/i5.jpg";

const initialState = {
  images: [
    {
      name: "image 1",
      src: i1,
      moreDetails: {
        name: "idk",
        age: 20,
      },
    },
    {
      name: "image 2",
      src: i2,
      moreDetails: {
        name: "idk",
        age: 30,
      },
    },
    {
      name: "image 3",
      src: i3,
      moreDetails: {
        name: "idk",
        age: 26,
      },
    },
    {
      name: "image 4",
      src: i4,
      moreDetails: {
        name: "idk",
        age: 23,
      },
    },
    {
      name: "image 5",
      src: i5,
      moreDetails: {
        name: "idk",
        age: 24,
      },
    },
  ],
  selectedImage: null,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_IMAGE":
      return { ...state, selectedImage: action.payload };

    default:
      return state;
  }
};

export default itemsReducer;
