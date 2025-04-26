import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import DeletedNotes from './components/DeletedNotes';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  // Function to handle adding a new note
  function handleNote(note) {
    // Remove numbers from the note
    let sanitizedNote = note.replace(/[0-9]/g, '');
    // Add the sanitized note to the beginning of the notes array
    let newNotes = [sanitizedNote, ...notes];
    setNotes(newNotes); // Update the notes state
    setNote(''); // Clear the note input
  }

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Notes" 
            options={{ title: 'Notes' }}
            children={(props) => (
              <Notes 
                {...props} 
                notes={notes} 
                setNotes={setNotes} 
                note={note} 
                setNote={setNote} 
              />
            )}
          />

          <Stack.Screen 
            name="AddNote" 
            options={{ title: 'Add Note' }}
            children={(props) => (
              <AddNote 
                {...props} 
                note={note} 
                setNote={setNote} 
                handleNote={handleNote} 
              />
            )}
          />

          <Stack.Screen 
            name="DeletedNotes" 
            component={DeletedNotes} 
            options={{ title: 'Deleted Notes' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
