/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../store/actions/favActions";

export default function CommentItem({ item }) {
  const itemDate = formatDistanceToNow(item.createdAt, {
    addSuffix: true,
    locale: tr,
  });
  const favs = useSelector((store) => store.favs);
  const dispatch = useDispatch();

  function handleFavAdd() {
    if (isFaved) {
      dispatch(removeFav(item.id));
    } else {
      dispatch(addFav(item));
    }
  }

  const isFaved = favs.find((fav) => fav.id === item.id) ? true : false;
  //const isFaved = favs.includes(item); //localStorage'dan string alınan ifadeyi JSON parse ile obje yaptık. artık farklı bir obje.

  return (
    <div className="border-2 rounded-md border-slate-200 p-4 my-4 w-3/4 mx-auto">
      <p>{item.title}</p>
      <div className="mt-4 flex justify-between">
        <p
          className={`hover:text-green-600 cursor-pointer ${
            isFaved ? "text-red-500" : ""
          }`}
          onClick={handleFavAdd}
        >
          {isFaved ? "Favorilerden Çıkar" : "Favorilere Ekle"}
        </p>
        <p>{itemDate}</p>
      </div>
    </div>
  );
}
