import { View, Text, StyleSheet } from 'react-native';
import { color } from '../assets/styles';

const AddNote = () => {
    return (
        <View>
        <Text>AddNote</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    addNoteContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        padding: 20,
        paddingTop: 20,
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
    },

    button:{
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
    }
})

export default AddNote;