import { BrowserRouter } from "react-router";
import Menu from "./componentes/Menu";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container mb-4">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

