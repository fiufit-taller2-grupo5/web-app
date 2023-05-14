import {
  Datagrid,
  DateField,
  Edit,
  EditButton,
  EmailField,
  List,
  SelectInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';
import { PostPagination } from '../utilities/pagination';

export const UserEdit = () => (
  <Edit>
  <SimpleForm>
      <SelectInput source="state" choices={[
          { id: 'active', name: 'Active' },
          { id: 'inactive', name: 'Inactive' },
      ]} />
  </SimpleForm>
</Edit>
);

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);

export const UserList = () => (
  <List perPage={5} pagination={<PostPagination />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="state" />
      <EditButton />
    </Datagrid>
  </List>
);
