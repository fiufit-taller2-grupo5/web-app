import { InferProps, Requireable, ReactElementLike, ReactNodeLike } from 'prop-types';
import { ReactNode } from 'react';
import {
  Datagrid,
  DateField,
  Edit,
  EditButton,
  EditProps,
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

export const UserEdit = (props: JSX.IntrinsicAttributes & Pick<EditProps<any, unknown> & { children: ReactNode; }, "children" | keyof EditProps<any, unknown>> & Pick<InferProps<{ actions: Requireable<boolean | ReactElementLike>; aside: Requireable<ReactElementLike>; children: Requireable<ReactNodeLike>; className: Requireable<string>; disableAuthentication: Requireable<boolean>; hasCreate: Requireable<boolean>; hasEdit: Requireable<boolean>; hasShow: Requireable<boolean>; hasList: Requireable<boolean>; id: Requireable<any>; mutationMode: Requireable<string>; mutationOptions: Requireable<object>; queryOptions: Requireable<object>; redirect: Requireable<string | boolean | ((...args: any[]) => any)>; resource: Requireable<string>; title: Requireable<ReactNodeLike>; transform: Requireable<(...args: any[]) => any>; sx: Requireable<any>; }>, "hasCreate" | "hasEdit" | "hasShow" | "hasList"> & Pick<EditProps<any, unknown> & { children: ReactNode; }, "component">) => (
  <Edit title="Edit User" {...props}>
    <SimpleForm>
      <SelectInput source="state" choices={[
        { id: 'active', name: 'Active' },
        { id: 'blocked', name: 'Blocked' },
      ]} />
    </SimpleForm>
  </Edit>);

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
