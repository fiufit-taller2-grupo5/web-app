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
  <List>
    <Datagrid rowClick="edit">
      <EmailField source="email" />
      <TextField source="name" />
    </Datagrid>
  </List>
);
