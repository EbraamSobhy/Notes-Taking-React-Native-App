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
  const [date, setDate] = useState(new Date().toUTCString());
  const [moveToBin, setMoveToBin] = useState([ ]);

  function handleNote(note) {

    let sanitizedNote = note.replace(/[0-9]/g, '');

    let newNotes = [sanitizedNote, ...notes];
    setNotes(newNotes);
    setNote('');
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
                date={date}
                setDate={setDate}
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
            moveToBin={moveToBin}
            setMoveToBin={setMoveToBin}
            notes={notes}
            setNotes={setNotes}
            date={date}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
