import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact_Us from "./components/Contact_Us/Contact_Us.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" name="Hero" element={<Hero />}></Route>
          <Route
            exact
            path="/services"
            name="Services"
            element={<Services />}
          ></Route>
          <Route
            exact
            path="/banner"
            name="Banner"
            element={<Banner />}
          ></Route>
          <Route
            exact
            path="/store"
            name="App Store"
            element={<AppStore />}
          ></Route>
          <Route
            exact
            path="/about"
            name="Testimonials"
            element={<Testimonials />}
          ></Route>
          <Route
            exact
            path="/contact-us"
            name="Contact Us"
            element={<Contact_Us />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
