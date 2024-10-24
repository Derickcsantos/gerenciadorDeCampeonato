import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './view/login';
import Home from './view/Home';
import Perfil from './view/Perfil';


export default function App() {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShow:false}} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};