import { useSelector } from "react-redux";
import FavoriteItem from "./FavoriteItem";

export default function FavoriteList() {
  const favs = useSelector((state) => state.favs);
  return (
    <>
      <div className="">
        {favs.map((item, index) => (
          <FavoriteItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
