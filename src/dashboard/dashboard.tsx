import { Card, CardContent, CardHeader } from '@mui/material';
import { UsersCreatedDashboard } from './UsersCreatedDashboard';

export const Dashboard = () => {
  return (
    <Card>
      <CardHeader title="Welcome to FiuFit - Administrator mode" />
      <CardContent> All information is available </CardContent>
      <UsersCreatedDashboard />
    </Card>
  );
};
