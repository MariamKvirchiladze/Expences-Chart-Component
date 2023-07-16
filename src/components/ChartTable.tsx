import Summary from "./Summary";
import styled from "styled-components";

const ChartTable = (): JSX.Element => {
  return (
    <ChartWrapper>
      <div className="titleAndChart">
        <div className="title">
          <h3>Spending - Last 7 days</h3>
        </div>
        <div className="chart">
          later I will add chart from Chart component here
        </div>
      </div>
      <div className="divider"></div>
      <Summary />
    </ChartWrapper>
  );
};
export default ChartTable;

const ChartWrapper = styled.div`
  width: 343px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 20px;
  background: #fffbf6;
  border-radius: 10px;
  @media (min-width: 1024px) {
    width: 540px;
    padding: 32px 40px 41px;
    gap: 32px;
  }
  h2 {
    font-size: 24px;
    line-height: 31.25x;
    font-weight: 700;
    color: #382314;
    @media (min-width: 1024px) {
      font-size: 32px;
      line-height: 41.66px;
    }
  }
  .titleAndChart {
    display: flex;
    flex-direction: column;
    gap: 52px;
    @media (min-width: 1024px) {
      gap: 66px;
    }
  }
  .title {
    display: flex;
    flex-direction: column;
    gap: 52px;
  }

  .divider {
    border: 1px solid #f8e9dd;
    width: 100%;
  }
`;
