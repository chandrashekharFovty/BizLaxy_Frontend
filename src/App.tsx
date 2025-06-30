import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ExplorePage from "./pages/ExplorePage";
import HomePage from "./pages/Homepage";
import Category from "./components/Shops/Categories"; // ✅ Keep only this if it's the actual homepage
import Sidebar from "./components/layout/Sidebar";
import ProfilePager from "./pages/ProfilePager";
import SignIn from "@/components/auth/SignIn";
import Register from "@/components/auth/Register";
import MobileRegister from "@/components/auth/MobileRegister";
import MobileOtpPage from "@/components/auth/MobileOtpPage";
import EmailRegister from "@/components/auth/EmailRegister";
import ForgotPassword from "@/components/auth/ForgotPassword";
import EmailOtpPage from "@/components/auth/EmailOtpPage";
import Pitch from "./pages/Pitch";
import Shop from "./pages/ShopPage";
import EduvidPage from "./pages/EduvidPage";
import Editprofile from "./components/profile/EditProfile";
import MessagePage from "./pages/MessagePage";
import Notifications from "./pages/Notifications";
import AddsManager from "./pages/AddsManager";
import CreateAddOptions from "./components/addManagement/CreateAddOptions";
import SelectAccountType from "./components/accounts/AccountTypeSelection";
import InfoForm from "./components/accounts/Info";
import ProductList from "./components/Shops/ProductList";
import ProductCartDetial from "./components/Shops/ProductCardDetails"; // ✅ Will use below
import PrivateRoute from "./routes/PrivateRoute";
import PitchDetails from "./components/pitch/PitchDetails";
const appRouter = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  { path: "/mobileregister", element: <MobileRegister /> },
  { path: "/mobileotp", element: <MobileOtpPage /> },
  { path: "/emailregister", element: <EmailRegister /> },
  { path: "/register", element: <Register /> },
  { path: "/selectaccounttype", element: <SelectAccountType /> },
  { path: "/infoform", element: <InfoForm /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
  { path: "/emailotp", element: <EmailOtpPage /> },
  //Private Routing satarted from Here
  {
    path: "/feed",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/sidebar",
    element: (
      <PrivateRoute>
        <Sidebar />
      </PrivateRoute>
    ),
  },
  {
    path: "/shop",
    element: (
      <PrivateRoute>
        <Shop />
      </PrivateRoute>
    ),
  },
  {
    path: "/pitch",
    element: (
      <PrivateRoute>
        <Pitch />
      </PrivateRoute>
    ),
  },
  {
    path: "/pitch-details",
    element: (
      <PrivateRoute>
        <PitchDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/pitch-details",
    element: (
      <PrivateRoute>
        <Pitch />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <ProfilePager />
      </PrivateRoute>
    ),
  },
  {
    path: "/editprofile",
    element: (
      <PrivateRoute>
        <Index />
      </PrivateRoute>
    ),
  },
  {
    path: "/explore",
    element: (
      <PrivateRoute>
        <ExplorePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/eduvid",
    element: (
      <PrivateRoute>
        <EduvidPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/message",
    element: (
      <PrivateRoute>
        <MessagePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/category",
    element: (
      <PrivateRoute>
        <Category />
      </PrivateRoute>
    ),
  },
  {
    path: "/notification",
    element: (
      <PrivateRoute>
        <Notifications />
      </PrivateRoute>
    ),
  },
  {
    path: "/adds",
    element: (
      <PrivateRoute>
        <AddsManager />
      </PrivateRoute>
    ),
  },
  {
    path: "/createaddoptions",
    element: (
      <PrivateRoute>
        <CreateAddOptions />
      </PrivateRoute>
    ),
  },
  {
    path: "/products/:category",
    element: (
      <PrivateRoute>
        <ProductList />
      </PrivateRoute>
    ),
  },
  {
    path: "/product/:productId",
    element: (
      <PrivateRoute>
        <ProductCartDetial />
      </PrivateRoute>
    ),
  },
  //the Default Route for Non Existing Routes
  { path: "/*", element: <NotFound /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <RouterProvider router={appRouter} />
      <Toaster />
  
    </div>
  );
}

export default App;
