import { Link, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import AddComment from "./components/AddComment";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Comments from "./pages/Comments";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/userContext";
import Favorites from "./components/Favorites/Favorites";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "./api/api";

function App() {
  const { user, darkMode } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    API.get("/users", {
      params: {
        token: localStorage.getItem("token") ?? "abc123",
      },
    })
      .then((res) => {
        const user = res.data[0];
        toast(`Tekrar hoş geldin, ${user.first_name}`);
      })
      .catch(() => {
        toast.error("Lütfen tekrar giriş yapınız...");
        history.push("/login");
      });
  }, []);

  return (
    <>
      <div
        className={`three-column-layout flex w-3/4 m-auto h-screen ${
          darkMode ? "dark" : ""
        }`}
      >
        <div className="left-sidebar w-1/4 bg-slate-100 flex flex-col justify-end">
          <p>{user.username}</p>
        </div>
        <main className="w-2/4">
          <Route path="/comments/add">
            <AddComment />
          </Route>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/comments">
              <Comments />
            </Route>
          </Switch>
        </main>
        <div className="right-sidebar w-1/4 bg-slate-100 dark:bg-red-200">
          <Favorites />
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 h-12">
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/comments">Comments</Link>
          <Link to="/comments/add">Add Comments</Link>
        </nav>
      </footer>
      <ToastContainer />
    </>
  );
}

export default App;
