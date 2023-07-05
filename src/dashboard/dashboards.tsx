import { Col, Divider, Row } from 'antd';
import { Dashboard } from './dashboard';

export const Dashboards: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={7}>
          <Dashboard
            metricNameLabel="Users Created"
            metricNameSystem="user_created"
          />
        </Col>
        <Col span={7}>
          <Dashboard
            metricNameLabel="Users Blocked"
            metricNameSystem="user_blocked"
          />
        </Col>
        <Col span={7}>
          <Dashboard
            metricNameLabel="Users Updated"
            metricNameSystem="user_updated"
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={7}>
          <Dashboard
            metricNameLabel="Training Plans Created"
            metricNameSystem="training_created"
          />
        </Col>
        <Col span={7}>
          <Dashboard
            metricNameLabel="Trainings Updated"
            metricNameSystem="training_updated"
          />
        </Col>
        <Col span={7}>
          <Dashboard
            metricNameLabel="Finished Trainings"
            metricNameSystem="training_finished"
          />
        </Col>
      </Row>
    </>
  );
};
