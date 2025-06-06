import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AddToCartContextProvider } from "@/context/AddToCartContext.jsx";
import { WishListContextProvider } from "@/context/WishListContext.jsx";
import { AuthProvider } from "@/context/AuthContext.jsx";
import { DashboardAuthProvider } from "@/context/DashboardAuthContext.jsx";

const queryClient = new QueryClient({});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AddToCartContextProvider>
          <WishListContextProvider>
            <DashboardAuthProvider>
              <App />
            </DashboardAuthProvider>
          </WishListContextProvider>
        </AddToCartContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
