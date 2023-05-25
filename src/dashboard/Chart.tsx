import { Line, LineConfig } from '@ant-design/charts';

interface ChartProps {
  chartData: any[];
}

export const Chart = (props: ChartProps) => {
  const chartConfigOld: LineConfig = {
    data: props.chartData,
    height: 400,
    width: document.documentElement.clientWidth * 0.8,
    xField: 'moment',
    yField: 'value',
    seriesField: 'metric',
    point: {
      size: 5,
      shape: 'diamond',
    },
    smooth: true,
  };

  const chartConfig = {
    data: props.chartData,
    xField: 'date',
    yField: 'count',
    height: 400,
    xAxis: {
      type: 'time',
    },
    yAxis: {
      nice: true,
    },
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Line {...chartConfig} />
    </div>
  );
};
