import { Conhecer } from "./components/Conhecer";
import { Perfil } from "./components/Perfil";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Perfil />
      <Conhecer />
    </div>
  );
}
