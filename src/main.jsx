import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import UserContextProvider from "./contexts/userContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { myStore } from "./store/store.js";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={myStore}>
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
          <ReactQueryDevtools initialIsOpen={true} />
        </Router>
      </QueryClientProvider>
    </UserContextProvider>
  </Provider>
);
