import { Datagrid, EmailField, List, TextField } from 'react-admin';

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);
