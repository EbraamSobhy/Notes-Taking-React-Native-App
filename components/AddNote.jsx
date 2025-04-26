import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Keyboard, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import { color } from '../assets/styles';

const AddNote = ({ navigation, note, setNote, handleNote }) => {
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ padding: 20, justifyContent: 'space-around' }}>
                        <TextInput
                            style={styles.input}
                            placeholder='Type Here...'
                            multiline={true}
                            value={note}
                            onChangeText={(text) => setNote(text)}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                if (note.trim() === '') {
                                    Alert.alert('Please enter a note'); // Alert if note is empty
                                } else {
                                    handleNote(note); // Pass the note to handleNote
                                    navigation.navigate('Notes'); // Navigate back to Notes screen
                                }
                            }}
                        >
                            <Text style={styles.buttonText}>Add Note</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 20,
        width: '100%',
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
        opacity: 0.8,
        shadowColor: color,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: color,
        borderWidth: 2,
        borderRadius: 5,
        height: 300,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: color,
        width: '40%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        alignSelf: 'flex-end',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    },
});

export default AddNote;
