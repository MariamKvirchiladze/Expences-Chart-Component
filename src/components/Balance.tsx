import logo from "../assets/logo.svg";
import styled from "styled-components";

const Balance = (): JSX.Element => {
  return (
    <BalanceWrapper>
      <div>
        <h4>My balance</h4>
        <h2>$921.48</h2>
      </div>
      <img src={logo} />
    </BalanceWrapper>
  );
};

export default Balance;

const BalanceWrapper = styled.div`
  width: 343px;
  background-color: #ec755d;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  @media (min-width: 1024px) {
    width: 540px;
    padding: 27px 39px 25px 32px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      font-size: 15px;
      font-weight: 400;
      color: white;
      line-height: 19.5px;
      @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 23.44px;
      }
    }

    h2 {
      font-size: 24px;
      font-weight: 700;
      color: white;
      line-height: 31.25px;
      @media (min-width: 1024px) {
        font-size: 32px;
        line-height: 41.66px;
      }
    }
  }
  img {
    width: 72px;
    height: 48px;
    transition: transform 0.3s;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.1);
  }
`;
