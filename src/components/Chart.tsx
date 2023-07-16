import styled from "styled-components";
import { chartDataTypes } from "../types";
interface CreateChartProps {
  chartData: chartDataTypes[];
  biggest: number;
  amount: number;
  data: {};
}

const Chart = (props: CreateChartProps): JSX.Element => {
  const height = (props.chartData[props.amount]?.amount / props.biggest) * 150;
  return (
    <ChartWrapper>
      <Columns
        height={height}
        biggest={props.biggest}
        i={props.chartData[props.amount].amount}
      >
        <div className="hoverAmount">
          <h5>{props.chartData[props.amount]?.amount}$</h5>
        </div>
      </Columns>
      <p>{props.chartData[props.amount]?.day}</p>
    </ChartWrapper>
  );
};

export default Chart;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: flex-end;
  justify-content: flex-end;
  @media (min-width: 1024px) {
    gap: 8px;
  }
  p {
    font-size: 15px;
    line-height: 19.5px;
    font-weight: 400;
    color: #92857a;
    align-self: center;
  }
`;

const Columns = styled.div<{ height: any; biggest: any; i: any }>`
  position: relative;
  width: 33px;
  @media (min-width: 1024px) {
    width: 50.36px;
  }
  height: ${(props) => props.height}px;
  background-color: ${(props) =>
    props.i === props.biggest ? "#76B5BC" : "#EC755D"};
  border-radius: 3px;
  @media (min-width: 1024px) {
    width: 50.36px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.i === props.biggest ? "#B4E0E5" : "#FF9B86"};
  }

  .hoverAmount {
    width: 75px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #382314;
    border-radius: 5px;
    position: absolute;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
    transform: translateY(100%);
    h5 {
      font-size: 18px;
      font-weight: 700;
      line-height: 23px;
      color: white;
    }
  }
  &:hover .hoverAmount {
    opacity: 1;
    transform: translateY(0%);
    top: -48px;
    left: -20px;
    @media (min-width: 1024px) {
      left: -15px;
    }
  }
`;
