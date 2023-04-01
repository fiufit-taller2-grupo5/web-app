import { Admin, Resource, ListGuesser} from "react-admin";
import { authProvider } from './authProvider';
import { Inicio } from './inicio';
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Inicio}>
   <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;