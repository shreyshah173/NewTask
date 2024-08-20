import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import BookConsultancy from "./pages/BookConsultancy";
import IncomeTax from "./pages/IncomeTax";
import GST from "./pages/GST";
import BusiessReg from "./pages/BusiessReg";
import LegalService from "./pages/LegalService";
import AnnualService from "./pages/AnnualService";
import Resources from "./pages/Resources";
import GstReg from "./pages/GstReg";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book-consultancy",
        element: <BookConsultancy />,
      },
      {
        path: "/income-tax",
        element: <IncomeTax />,
      },
      {
        path: "/gst",
        element: <GST />,
      },
      {
        path: "/business-registration",
        element: <BusiessReg />,
      },
      {
        path: "/legal-service",
        element: <LegalService />,
      },
      {
        path: "/annual-service",
        element: <AnnualService />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/gst-registration",
        element: <GstReg />,
      },
    ],
  },
]);
function App() {
  return <div className="App">{appRouter}</div>;
}

export default App;

// import React from "react";
// import Header from "./components/Header";
// import Navigation from "./components/Navigation";
// import Hero from "./components/Hero";
// import OurAim from "./components/OurAim";
// import OurServices from "./components/OurServices";
// import WhyChooseUs from "./components/WhyChooseUs";
// import LatestBlog from "./components/LatestBlog";
// import Footer from "./components/Footer";
// import Testimonial from "./components/Testimonial";
// import Industries from "./components/Industries";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Navigation />
//       <main>
//         <Hero />
//         <OurAim />
//         <OurServices />
//         <WhyChooseUs />
//         <Industries />
//         <Testimonial />
//         <LatestBlog />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
