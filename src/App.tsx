import { Outlet } from "react-router-dom";
// import Footer from "./components/shared/footer.tsx";

const App = () => {
  return (
    <div className="font-inter">
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
