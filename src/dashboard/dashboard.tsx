import { Card, CardContent, CardHeader } from '@mui/material';
import { UsersCreatedDashboard } from './UsersCreatedDashboard';

export const Dashboard = () => {
  return (
    <Card>
      <CardHeader title="Bienvenido a FiuFit - Modo administrador" />
      <CardContent>Toda la información se encuentra disponible</CardContent>
      <UsersCreatedDashboard />
    </Card>
  );
};
