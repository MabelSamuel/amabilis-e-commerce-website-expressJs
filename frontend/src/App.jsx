import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
// layout
import Root from "@/layouts/Root";
import DashboardLayout from "@/layouts/DashboardLayout";
// pages
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";
import CollectionPage from "@/pages/CollectionPage";
import ProductGrid from "@/components/collection/ProductGrid";
import CartPage from "@/pages/CartPage";
import LoginAndRegisterPage from "@/pages/LoginAndRegisterPage";
import WishListPage from "@/pages/WishListPage";
import ProductList from "@/components/collection/ProductList";
import Login from "@/components/login-register/Login";
import Register from "@/components/login-register/Register";
import AboutPage from "@/pages/AboutPage";
import CheckOutPage from "@/pages/CheckOutPage";
import SearchResultsPage from "@/pages/SearchResultsPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import ProtectedRoute from "@/components/checkout/ProtectedRoute";
import MyAccountPage from "@/pages/MyAccountPage";
import AdminLoginPage from "@/pages/AdminLoginPage";
import DashboardPage from "@/pages/DashboardPage";
import AdminCustomersPage from "@/pages/AdminCustomersPage";
import AdminOrdersPage from "@/pages/AdminOrdersPage";
import AdminOnlineStorePage from "@/pages/AdminOnlineStorePage";
import AdminCataloguePage from "@/pages/AdminCataloguePage";
import AdminReviewsPage from "@/pages/AdminReviewsPage";
import AdminSettingsPage from "@/pages/AdminSettingsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="collection" element={<CollectionPage />}>
          <Route index element={<Navigate to="grid" />} />
          <Route path="grid" element={<ProductGrid />} />
          <Route path="list" element={<ProductList />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="wishlist" element={<WishListPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login-register" element={<LoginAndRegisterPage />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <CheckOutPage />
            </ProtectedRoute>
          }
        />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="product-details/:id" element={<ProductDetailsPage />} />
        <Route
          path="my-account"
          element={
            <ProtectedRoute>
              <MyAccountPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="admin/login" element={<AdminLoginPage />} />
      <Route path="admin/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="overview" />} />
          <Route path="overview" element={<DashboardPage/>}/>
          <Route path="catalogue" element={<AdminCataloguePage/>} />
          <Route path="customers" element={<AdminCustomersPage/>} />
          <Route path="orders" element={<AdminOrdersPage/>} />
          <Route path="reviews" element={<AdminReviewsPage/>} />
          <Route path="settings" element={<AdminSettingsPage/>} />
          <Route path="online-store" element={<AdminOnlineStorePage/>}/>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
