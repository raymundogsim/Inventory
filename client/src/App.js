import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";
import BillsPage from "./pages/BillsPage";
import CustomersPage from "./pages/CustomersPage";
import Logout from "./pages/Logout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/items" element={<ItemPage />} />
          <Route path="/bills" element={<BillsPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
