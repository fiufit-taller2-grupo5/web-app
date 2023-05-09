import {
  Datagrid,
  List,
  Show,
  ShowButton,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';
import { PostPagination } from '../utilities/pagination';

const postFilters = [
  <TextInput label="Title" source="title" key="id" alwaysOn />,
  <TextInput label="Difficulty" key="id" source="difficulty" />,
];

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
    </Datagrid>
  </List>
);
