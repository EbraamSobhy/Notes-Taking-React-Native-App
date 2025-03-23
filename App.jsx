import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notes from './components/Notes';
import AddNote from './components/AddNote';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Notes" component={props => <Notes {...props} />} />
          <Stack.Screen name="AddNote" component={props => <AddNote {...props} />} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}