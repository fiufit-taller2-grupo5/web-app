import { Card, CardContent, CardHeader, Button } from '@mui/material';
import { CreateButton, TopToolbar, useAuthProvider } from 'react-admin';
import React from 'react';

export const Dashboard = () => {
  const auth = useAuthProvider();
  React.useEffect(() => {
    auth.getJWTToken().then((res: any) => {
      // PORFIN, aca esta el token jaja. Hay que pasarle esto al backend para que verifique, junto con mas datos
      console.log(res);
    });
  }, []);

  return (
    <Card>
      <CardHeader title="Bienvenido a FiuFit - Modo administrador" />
      <CardContent>Toda la información se encuentra disponible</CardContent>
    </Card>
  );
};
