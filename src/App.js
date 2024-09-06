import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SingleCourse, Cart, Courses, LoginReg } from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AuthProvider } from './context/auth_context'; // Import AuthProvider

function App() {
  return (
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<SingleCourse />} />
          <Route path="/category/:category" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginReg />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
