import "./App.css";
import { AppRouters } from "./routers/routers";
import * as S from "./App.styled";

function App() {
  return (
    <S.MainApp>
      <AppRouters />
    </S.MainApp>
  );
}

export default App;
