import {
  BrowserRouter,
  Route,
  Routes as Switch,
  useLocation,
} from "react-router";

import {
  Categories,
  Dashboard,
  Devs,
  Footer,
  ForgotPassword,
  Header,
  InfoSell,
  InfoShop,
  LandingProducts,
  LoginPage,
  NavBar,
  NewCategory,
  NewProduct,
  NewUser,
  Products,
  RegisterPage,
  Users,
} from "../components/index";

export const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgotPassword" &&
        location.pathname !== "/dashboard" &&
        location.pathname !== "/usuarios" &&
        location.pathname !== "/productos" &&
        location.pathname !== "/categoriasProductos" &&
        location.pathname !== "/newUser" &&
        location.pathname !== "/newProduct" &&
        location.pathname !== "/newCategory" && <NavBar />}

      <Switch>
        <Route
          path="/"
          element={
            <>
              <Header />
              <InfoSell />
              <InfoShop />
              <Devs />
              <Footer />
            </>
          }
        />
        <Route path="/landingProductos" element={<LandingProducts />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/categoriasProductos" element={<Categories />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/newCategory" element={<NewCategory />} />
      </Switch>
    </>
  );
};

export const Routes = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
