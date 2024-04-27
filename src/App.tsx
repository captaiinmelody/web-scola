import { Outlet } from "react-router-dom";
import Header from "./components/shared/header.tsx";
import Footer from "./components/shared/footer.tsx";

const App = () => {
  return (
    <div className="font-univers">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
