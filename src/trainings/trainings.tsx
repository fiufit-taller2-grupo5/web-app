import {
  Datagrid,
  Edit,
  EditButton,
  List,
  SelectInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';
import { PostPagination } from '../utilities/pagination';

const postFilters = [
  <TextInput label="Type" source="type" key="id" alwaysOn />,
  <TextInput label="Difficulty" key="id" source="difficulty" />,
];

export const TrainingEdit = () => (
  <Edit>
  <SimpleForm>
      <SelectInput source="state" choices={[
          { id: 'active', name: 'Active' },
          { id: 'blocked', name: 'Blocked' },
      ]} />
  </SimpleForm>
</Edit>
);

export const TrainingShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="type" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);

export const TrainingList = () => (
  <List perPage={5} pagination={<PostPagination />} filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="state" />
      <TextField source="difficulty" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);
