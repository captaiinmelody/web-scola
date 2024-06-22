import { Outlet } from "react-router-dom";
import Footer from "./components/shared/footer.tsx";

const App = () => {
  return (
    <div className="font-univers bg-gradient-to-l from-primary/50 via-white/50 to-white/50">
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
