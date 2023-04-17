import {
  Datagrid,
  DateField,
  EmailField,
  ImageField,
  List,
  TextField,
} from 'react-admin';
import { PostPagination } from '../utilities/pagination';

export const UserList = () => (
  <List perPage={5} pagination={<PostPagination />}>
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
