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

export const Dashboard: React.FC = () => {
  const [chartData, setChartData] = React.useState<any[]>([]);
  const [metric, setMetric] = React.useState('');
  const [config, setconfig] = React.useState<Config>({
    timeFrameInterval: 'hours',
    timeFrameCount: 1,
    groupBy: 'minutes',
  });

  const updateChartData = React.useCallback(async () => {
    try {
      const data = await fetchChartData(config, metric);
      setChartData(data);
    } catch (err) {
      console.error(err);
    }
  }, [config]);

  const handleReload = React.useCallback(() => {}, [metric]);

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
      <header className="App-header">
        <DashboardForm
          setMetric={setMetric}
          setConfig={setconfig}
          config={config}
          metrics={metrics}
          handleReload={handleReload}
        />
        <Chart chartData={chartData} />
      </header>
    </div>
  );
};
