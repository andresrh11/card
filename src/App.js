import "./App.css";
import Card from "./components/Card";
import styled from "styled-components";
export default function App() {
  return (
    <Aplicacion>
      <Card />
    </Aplicacion>
  );
}

const Aplicacion = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  
  height: 100%;
  width: 100%;
  align-items: center;
`;
