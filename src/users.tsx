import {
  Datagrid,
  DateField,
  EmailField,
  ImageField,
  List,
  Pagination,
  TextField,
} from 'react-admin';

export const UserList = () => (
  <List
    perPage={5}
    pagination={<Pagination rowsPerPageOptions={[5, 10, 20, 30]} />}
  >
    <Datagrid>
      <TextField source="id" />
      <ImageField source="avatar" sx={{ my: -2 }} />
      <TextField source="name" />
      <EmailField source="email" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="state" />
    </Datagrid>
  </List>
);
