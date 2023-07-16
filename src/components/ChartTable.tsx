import { useEffect, useState } from "react";
import { chartDataTypes } from "../types";
import axios from "axios";
import styled from "styled-components";
import Summary from "./Summary";
import Chart from "./Chart";

const ChartTable = (): JSX.Element => {
  const [chartData, setChartData] = useState<chartDataTypes[]>([]);
  useEffect(() => {
    const request = async () => {
      const response = await axios.get("/data.json");
      const data = response.data;
      setChartData(data);
    };
    request();
  }, []);

  const amounts: number[] = [];
  for (let i = 0; i < chartData.length; i++) {
    amounts.push(chartData[i]?.amount);
  }

  const biggest = Math.max(...amounts);

  return (
    <ChartWrapper>
      <div className="titleAndChart">
        <div className="title">
          <h3>Spending - Last 7 days</h3>
        </div>
        <ChartDiv>
          {chartData.map((data, amount) => (
            <Chart
              data={data}
              chartData={chartData}
              biggest={biggest}
              amount={amount}
              key={amount}
            />
          ))}
        </ChartDiv>
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
const ChartDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  @media (min-width: 1024px) {
    gap: 17.91px;
  }
`;
