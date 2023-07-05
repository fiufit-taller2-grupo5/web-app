import { Button, Col, Divider, Row } from 'antd';
import { Config, Dashboard } from './dashboard';
import { DashboardForm } from './DashboardForm';
import React from 'react';

export interface Metric {
  label: string;
  name: string;
}

const metrics: Metric[] = [
  {
    label: 'Users Created',
    name: 'user_created',
  },
  {
    label: 'Users Blocked',
    name: 'user_blocked',
  },
  {
    label: 'Users Updated',
    name: 'user_updated',
  },
  {
    label: 'Training Plans Created',
    name: 'training_created',
  },
  {
    label: 'Trainings Updated',
    name: 'training_updated',
  },
  {
    label: 'Finished Trainings',
    name: 'training_finished',
  },
];

export const Dashboards: React.FC = () => {
  const [config, setConfig] = React.useState<Config>({
    timeFrameInterval: 'minutes',
    timeFrameCount: 20,
    groupBy: 'minutes',
  });

  return (
    <>
      <Row>
        <Col span={12}>
          <DashboardForm
            setConfig={setConfig}
            config={config}
            metricName="some metric"
          />
        </Col>
      </Row>
      <Row>
        <Col span={7}>
          <Dashboard metric={metrics[0]} config={config} />
        </Col>
        <Col span={7}>
          <Dashboard metric={metrics[1]} config={config} />
        </Col>
        <Col span={7}>
          <Dashboard metric={metrics[2]} config={config} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={7}>
          <Dashboard metric={metrics[3]} config={config} />
        </Col>
        <Col span={7}>
          <Dashboard metric={metrics[4]} config={config} />
        </Col>
        <Col span={7}>
          <Dashboard metric={metrics[5]} config={config} />
        </Col>
      </Row>
    </>
  );
};
