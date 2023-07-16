import styled from "styled-components";

const Summary = (): JSX.Element => {
  return (
    <SummaryWrapper>
      <div className="total">
        <p>Total this month</p>
        <h1>$478.33</h1>
      </div>

      <div className="lastMonth">
        <h4>+2.4% </h4>
        <p>from last month</p>
      </div>
    </SummaryWrapper>
  );
};

export default Summary;

const SummaryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .total {
    display: flex;
    flex-direction: column;
    gap: 4px;
    @media (min-width: 1024px) {
      gap: 1px;
    }

    p {
      font-size: 15px;
      line-height: 19.5px;
      font-weight: 400;
      color: #92857a;
      @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 23.44px;
      }
    }

    h1 {
      font-size: 30px;
      font-weight: 700;
      line-height: 39px;
      color: #382314;
      @media (min-width: 1024px) {
        font-size: 48px;
        line-height: 62.5px;
      }
    }
  }

  .lastMonth {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 0;
    justify-content: end;
    h4 {
      font-size: 15px;
      line-height: 19.5px;
      font-weight: 700;
      color: #382314;
      @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 23.44px;
      }
    }
    p {
      font-size: 15px;
      line-height: 19.5px;
      font-weight: 400;
      color: #92857a;
      @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 23.44px;
      }
    }
  }
`;
