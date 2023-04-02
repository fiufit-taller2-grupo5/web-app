import { Admin, Resource, ListGuesser } from "react-admin";
import { authProvider } from './authProvider';
import { Inicio } from './inicio';
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import React from "react";
import axios from "axios";


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {

  React.useEffect(() => {
    axios.get('/training-service/health').then((res) => {
      console.log(res);
    });
  })
  return (<Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Inicio}>
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
  )
};

export default App;