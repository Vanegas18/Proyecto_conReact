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
  Edit,
  EditCategory,
  EditProduct,
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
  const hideNavBarPaths = [
    "/login",
    "/register",
    "/forgotPassword",
    "/dashboard",
    "/usuarios",
    "/productos",
    "/categoriasProductos",
    "/newUser",
    "/newProduct",
    "/newCategory",
    "/editUser",
    "/editProduct",
  ];

  const shouldHideNavBar =
    hideNavBarPaths.includes(location.pathname) ||
    /^\/editCategory\/\d+$/.test(location.pathname);
  return (
    <>
      {!shouldHideNavBar && <NavBar />}

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
        <Route path="/editUser" element={<Edit />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/editProduct" element={<EditProduct />} />
        <Route path="/newCategory" element={<NewCategory />} />
        <Route path="/editCategory/:categoryId" element={<EditCategory />} />
      </Switch>
    </>
  );
};

export const Routes = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
