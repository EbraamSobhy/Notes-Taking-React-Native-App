import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import { color } from '../assets/styles';

const DeletedNotes = () => {
    return (
        <ScrollView>
        <View style={styles.notesContainer}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity style={styles.emptyButton}>
                    <Text style={styles.emptyButtonText}>Undo</Text>
                </TouchableOpacity>

                <Text style={{fontSize: 18, fontWeight: '700', color: color}}>Deleted Notes:</Text>

                <TouchableOpacity style={styles.emptyButton}>
                    <Text style={styles.emptyButtonText}>Empty</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
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
        height: 2,
        backgroundColor: color,
        marginTop: 5,
        marginBottom: 5,
    },

});

export default DeletedNotes;