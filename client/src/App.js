import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { PostsPage } from "./pages/PostsPage";
import { PostPage } from "./pages/PostPage";
import { AddPostPage } from "./pages/AddPostPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { EditPostPage } from "./pages/EditPostPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/:id" element={<PostPage />} />
        <Route path="/:id/edit" element={<EditPostPage />} />
        <Route path="/new" element={<AddPostPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Layout>
  );
}
export default App;
