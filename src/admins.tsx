import {
  Create,
  PasswordInput,
  SimpleForm,
  TextInput,
  Datagrid,
  EmailField,
  List,
} from 'react-admin';

export const AdminCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="userEmail" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);

export const AdminList = () => (
  <List>
    <Datagrid rowClick="edit">
      <EmailField source="email" />
    </Datagrid>
  </List>
);
