import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/setup.scss";
import { ContentContextProvider } from "./contexts/ContentContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { AppContextProvider } from "./contexts/AppContext.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ProductContextProvider } from "./contexts/ProductContext.tsx";
import { ToastContainer } from "react-toastify";
const customToastStyle = {
  background: "#007bff",
  color: "#ffffff",
  borderRadius: "8px",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ToastContainer
      autoClose={850}
      toastStyle={customToastStyle}
      bodyClassName="custom-toast-body"
    />
    <AuthContextProvider>
      <AppContextProvider>
        <ProductContextProvider>
          <ContentContextProvider>
            <App />
          </ContentContextProvider>
        </ProductContextProvider>
      </AppContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
  // </React.StrictMode>,
);
