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
  <TextInput label="Name" source="name" alwaysOn />,
  <TextInput label="Difficulty" source="difficulty" />,
];

export const TrainingShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);

export const TrainingList = () => (
  <List perPage={5} pagination={<PostPagination />} filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="difficulty" />
      <ShowButton />
    </Datagrid>
  </List>
);
