import React from 'react';
import { message } from 'antd';
import { Chart } from './Chart';
import './styles.css';
import { fetchChartData } from './metricsService';
import { Metric } from './dashboards';

message.config({
  top: 50,
  duration: 5,
  maxCount: 3,
  rtl: true,
});

export interface Config {
  timeFrameInterval:
    | 'hours'
    | 'minutes'
    | 'days'
    | 'weeks'
    | 'months'
    | 'years';
  timeFrameCount: number;
  groupBy?: 'hours' | 'minutes' | 'days' | 'weeks' | 'months' | 'years';
}

export interface DashboardProps {
  metric: Metric;
  config: Config;
}

export const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const [chartData, setChartData] = React.useState<any[]>([]);
  const updateChartData = React.useCallback(async () => {
    try {
      const data = await fetchChartData(props.config, props.metric.name);
      setChartData(data);
    } catch (err) {
      console.error(err);
    }
  }, [props.config]);

  React.useEffect(() => {
    updateChartData();
  }, []);

  // update metrics if config changes
  React.useEffect(() => {
    updateChartData();
  }, [props.config, updateChartData]);

  return (
    <div className="App">
      <h3>{props.metric.label}</h3>
      <Chart chartData={chartData} />
    </div>
  );
};
