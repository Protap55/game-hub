import Navbar from "../Components/Navber";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />

      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center h-screen bg-[#eff6ff]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-semibold text-gray-700">Loading...</p>
          </div>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </>
  );
};

export default MainLayout;
