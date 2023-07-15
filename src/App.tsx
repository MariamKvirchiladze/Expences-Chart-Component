import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Balance from "./components/Balance";
function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Balance />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8e9dd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 1024px) {
    gap: 24px;
  }
`;
