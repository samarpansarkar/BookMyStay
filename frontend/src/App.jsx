import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StayDetailPage from "./pages/StayDetailPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PricingPage from "./pages/PricingPage";
import FeaturesPage from "./pages/FeaturesPage";
import SupportPage from "./pages/SupportPage";
import StayPage from "./pages/StayPage";

const App = () => {
  return (
    <div className=' w-full sm:max-w-[96%] mx-auto bg-white dark:bg-gray-800'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/stay' element={<StayPage />} />
        <Route path='/stay/:id' element={<StayDetailPage />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/signup' element={<SignUpPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/features' element={<FeaturesPage />} />
        <Route path='/support' element={<SupportPage />} />
      </Routes>
    </div>
  );
};

export default App;
