import { Datagrid, List, TextField, TextInput } from 'react-admin';
import { PostPagination } from './pagination';

const postFilters = [
  <TextInput label="Name" source="name" alwaysOn />,
  <TextInput label="Description" source="description" />,
];

export const TrainingList = () => (
  <List perPage={5} pagination={<PostPagination />} filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="dificulty" />
    </Datagrid>
  </List>
);
