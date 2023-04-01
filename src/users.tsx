import { Datagrid, EmailField, List, TextField, Edit } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="phone" />
        </Datagrid>
    </List>
);

export const PostEdit = () => (
   <Edit title={"<PostTitle />"}> </Edit>
);