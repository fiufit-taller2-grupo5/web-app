import { Card, CardContent, CardHeader, Button } from '@mui/material';
import { CreateButton, TopToolbar, useAuthProvider } from 'react-admin';
import React from 'react';

export const Dashboard = () => {
  return (
    <Card>
      <CardHeader title="Bienvenido a FiuFit - Modo administrador" />
      <CardContent>Toda la información se encuentra disponible</CardContent>
    </Card>
  );
};
