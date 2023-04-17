import {
  Create,
  PasswordInput,
  SimpleForm,
  TextInput,
  Datagrid,
  EmailField,
  List,
  TextField,
  SimpleShowLayout,
  Show,
} from 'react-admin';
import { PostPagination } from '../utilities/pagination';
import { ShowButton } from 'react-admin';

export const AdminShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);

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
      <ShowButton />
    </Datagrid>
  </List>
);
