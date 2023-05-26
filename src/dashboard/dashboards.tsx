import { Dashboard } from './dashboard';

export const Dashboards: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Dashboard
          metricNameLabel="Users Created"
          metricNameSystem="user_created"
        />
        <Dashboard
          metricNameLabel="Training Plans Created"
          metricNameSystem="training_created"
        />
      </div>
    </>
  );
};
