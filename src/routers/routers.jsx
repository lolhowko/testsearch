import { MainPage } from "../pages/Main";
import { NotFound } from "../pages/NotFound";
import { UserPage } from "../pages/User/user-page";

const { Routes, Route } = require("react-router-dom");

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/userPage/:userId" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
