import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Layout from "../pages/Layout";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import SingleContact from "../pages/SingleContact";
import Addcontact from "../pages/Addcontact";
// import Categorycontacts from "./Categorycontacts";
import AddCategory from "../pages/Addcategory";
import Category from "../pages/Category";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/Signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
                <Route path="/singlecontact" element={<SingleContact />} />
                <Route path="/addcontact" element={<Addcontact />} />
                <Route path="/category" element={<Category />} />
                <Route path="/addcategory" element={<AddCategory />} />


        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
