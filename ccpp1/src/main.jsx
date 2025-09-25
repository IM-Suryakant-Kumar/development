import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router";
import { AsideProvider } from "./context/aside-context";
import { ProductProvider } from "./context/product-context";
import { WishlistProvider } from "./context/wishlist-context";
import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "./context/cart-context";
import { ToastProvider } from "./context/toast-context";
import { AddressProvider } from "./context/address-context";

// Call make Server
makeServer();

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
      <ToastProvider>
        <AuthProvider>
       <AddressProvider>
       <CartProvider>
            <WishlistProvider>
              <ProductProvider>
                <AsideProvider>
                  <App />
                </AsideProvider>
              </ProductProvider>
            </WishlistProvider>
          </CartProvider>
       </AddressProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
	</StrictMode>
);
