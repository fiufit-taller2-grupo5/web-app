import React from 'react';
import { message } from 'antd';
import { Chart } from './Chart';
import { DashboardForm } from './DashboardForm';
import './styles.css';
import { fetchChartData } from './metricsService';

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
  metricNameLabel: string;
  metricNameSystem: string;
}

export const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const [chartData, setChartData] = React.useState<any[]>([]);
  const [config, setconfig] = React.useState<Config>({
    timeFrameInterval: 'minutes',
    timeFrameCount: 20,
    groupBy: 'minutes',
  });

  const updateChartData = React.useCallback(async () => {
    try {
      const data = await fetchChartData(config, props.metricNameSystem);
      setChartData(data);
    } catch (err) {
      console.error(err);
    }
  }, [config]);

  const handleReload = React.useCallback(() => {}, []);

  React.useEffect(() => {
    updateChartData();
  }, []);

  // update metrics if config changes
  React.useEffect(() => {
    updateChartData();
  }, [config, updateChartData]);

  const metrics = [
    { key: 'user_created', name: 'Users Created' },
    { key: 'training_created', name: 'Trainings Created' },
    { key: 'training_completed', name: 'Trainings Completed' },
  ];

  return (
    <div className="App">
      <DashboardForm
        metricName={props.metricNameLabel}
        setConfig={setconfig}
        config={config}
        metrics={metrics}
        handleReload={handleReload}
      />
      <Chart chartData={chartData} />
    </div>
  );
};
