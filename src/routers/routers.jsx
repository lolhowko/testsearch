import { MainPage } from "../pages/Main";
import { NotFound } from "../pages/NotFound";

const { Routes, Route } = require("react-router-dom");

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
