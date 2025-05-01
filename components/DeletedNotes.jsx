import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import { color } from '../assets/styles';

const DeletedNotes = ({ moveToBin = [], date, undoNote, ...props }) => {

    const deleteNote = (index) => {
        const updatedMoveToBin = moveToBin.filter((_, i) => i !== index);
        props.setMoveToBin(updatedMoveToBin);
    };

    return (
        <ScrollView>
        <View style={styles.notesContainer}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '700', color: color, textAlign:'center', flex: 1}}>Deleted Notes:</Text>
            </View>
            <View style={styles.divider}></View>

            {moveToBin.length === 0
            ?
            <View style={styles.emptyNoteContainer}>
                <Text style={styles.emptyNoteText}>No Deleted Notes</Text>
            </View>
            :
            moveToBin.map((item, index) => (
                <View key={index} style={styles.item}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.note}>
                            <Text style={styles.index}>{index + 1}. </Text>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                        <TouchableOpacity onPress={() => undoNote(index)}>
                            <Text style={styles.delete}>Undo</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dateContainer}>
                        <Text>{item.date}</Text>
                        <TouchableOpacity onPress={() => deleteNote(index)}>
                            <Text style={styles.delete}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    notesContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom: 70,
        opacity: 0.9,
    },
    emptyButton: {
        backgroundColor: color,
        width: '25%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        marginBottom: 5,
    },

    emptyButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },

    divider: {
        width: '100%',
        height: 3,
        backgroundColor: color,
        marginTop: 6,
        marginBottom: 5,
    },

emptyNoteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 240
},

emptyNoteText:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: color,
    fontWeight: '600',
    fontSize: 15,
},

item: {
    marginBottom: 20,
    padding: 15,
    color: 'black',
    opacity: 0.8,
    marginTop: 10,
    shadowColor: color,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: color,
    borderWidth: 2,
    borderRadius: 5,
    borderLeftWidth: 15,
},

index: {
    fontSize: 20,
    fontWeight: '800',
},

note: {
    flexDirection: 'row',
    width: '75%',
},

text: {
    fontWeight: '700',
    fontSize: 17,
    alignSelf: 'center',
},

delete: {
    color: color,
    fontWeight: '700',
    fontSize: 15,
},
});

export default DeletedNotes;