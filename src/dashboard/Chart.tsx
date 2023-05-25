import { Line, LineConfig } from '@ant-design/charts';

interface ChartProps {
  chartData: any[];
}

export const Chart = (props: ChartProps) => {
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
