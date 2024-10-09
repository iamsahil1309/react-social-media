import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Layout from "./Layout";
import Profile from "./pages/Profile";
import useAuthStore from "./store/authStore";

function App() {
  const authUser = useAuthStore((state) => state.user);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/auth"} />}
        />
        <Route
          path="/auth"
          element={!authUser ? <Auth /> : <Navigate to={"/"} />}
        />
        <Route path="/:user" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
