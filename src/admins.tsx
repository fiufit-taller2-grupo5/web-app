import {
  Create,
  PasswordInput,
  SimpleForm,
  TextInput,
  Datagrid,
  EmailField,
  List,
  TextField,
} from 'react-admin';
import { PostPagination } from './pagination';

export const AdminCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="name" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);

export const AdminList = () => (
  <List perPage={5} pagination={<PostPagination />}>
    <Datagrid rowClick="edit">
      <EmailField source="email" />
      <TextField source="name" />
    </Datagrid>
  </List>
);
