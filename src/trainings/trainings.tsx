import {
  AutocompleteInput,
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
import { NumberInput } from 'react-admin';

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

const postFilters = [
  <TextInput source="name" />,
  <SelectInput source="type" choices={[
      { id: 'Running', name: 'Running' },
      { id: 'Swimming', name: 'Swimming' },
      { id: 'Biking', name: 'Biking' },
      { id: 'Yoga', name: 'Yoga' },
      { id: 'Basketball', name: 'Basketball' },
      { id: 'Football', name: 'Football' },
      { id: 'Walking', name: 'Walking' },
      { id: 'Gymnastics', name: 'Gymnastics' },
      { id: 'Dancing', name: 'Dancing' },
      { id: 'Hiking', name: 'Hiking' },
  ]} />,
  <NumberInput label="Difficulty" source="difficulty" min="0" max="10" />,
];

export const TrainingList = () => (
  <List perPage={5} pagination={<PostPagination />} filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="type" />
      <TextField source="state" />
      <TextField source="difficulty" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);
