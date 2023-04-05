import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

const GoldStar = () => (
  <IconContext.Provider value={{ color: "FFD700", className: "star" }}>
    <FaStar />
  </IconContext.Provider>
);

export default GoldStar;
