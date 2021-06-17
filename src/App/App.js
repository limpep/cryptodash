import "./App.css";
import styled from "styled-components";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

function App() {
  return (
    <div>
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Title>Hello World!</Title>
        </AppProvider>
      </AppLayout>
    </div>
  );
}

export default App;
