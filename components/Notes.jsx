import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { color } from '../assets/styles';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { useState } from 'react';

const Notes = ({ navigation, notes = [], date, setNotes, moveToBin, setMoveToBin }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredNotes = notes.filter(note =>
        note.toLowerCase().includes(searchQuery.toLowerCase())
    );

    function deleteNotes(index) {
        let newArray = [...notes];
        let movedNote = newArray.splice(index, 1);
        setNotes(newArray);

        let bin = [movedNote[0], ...moveToBin];
        setMoveToBin(bin);
    }

    function clearAllNotes() {
        setMoveToBin([...notes, ...moveToBin]);
        setNotes([]);
    }

    return (
        <View style={styles.notesContainer}>

            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Your Notes...</Text>

                <View style={{flexDirection: 'row'}}>

                    <TouchableOpacity style={[ styles.button, {marginLeft: 40} ]} onPress={() => navigation.navigate('DeletedNotes')}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='trash-2-outline' fill='white' style={{width: 25, height: 50}} />
                    </ApplicationProvider>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddNote')}>
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='plus-outline' fill='white' style={{width: 25, height: 50}} />
                    </ApplicationProvider>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.divider} />
            {/* Search bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder='Search...'
                    placeholderTextColor={color}
                    style={[styles.input, {borderWidth: 3}]}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                    {/* Search button */}
                <TouchableOpacity style={styles.searchButton}>
                <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='search' fill='white' style={{width: 22 , height: 40}} />
                    </ApplicationProvider>
                </TouchableOpacity>

                {/* clear button */}
                <TouchableOpacity style={styles.clearButton} onPress={clearAllNotes}>
                    <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {filteredNotes.length === 0 ? (
                    <View style={styles.emptyNoteContainer}>
                        <Text style={styles.emptyNoteText}>No notes available</Text>
                    </View>
                ) : (
                    filteredNotes.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                            <View style={styles.note}>
                                <Text style={styles.index}>{index + 1}. </Text>
                                <Text style={styles.text}>{item}</Text>
                            </View>

                            <TouchableOpacity onPress={() => deleteNotes(index)}>
                                <Text style={styles.delete}>X</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dateContainer}>
                            <Text>{date}</Text>

                            <TouchableOpacity>
                                <Text style={styles.delete}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    notesContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom: 70,
        opacity: 0.9,
    },
    heading: {
        fontSize: 30,
        fontWeight: '700',
        color: color,
    },

    divider: {
        width: '100%',
        height: 3,
        backgroundColor: color,
        marginTop: 7,
        marginBottom: 5,
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

    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    button: {
        backgroundColor: color,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        height: 50,
    },

    buttonText: {
        color: 'white',
        fontSize: 32,
        fontWeight: '800',
    },

    scrollView: {
        marginBottom: 70,
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

    input: {
        height: 50,
        paddingHorizontal: 20,
        width: '65%',
        fontSize: 19,
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
    },

    searchContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },

    searchButton: {
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        borderRadius: 5,
        height: 40,
    },

    clearButton:{
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        borderRadius: 5,
        height: 40,
    },

    clearButtonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
    },

    searchButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 12,
    },

    emptyNoteContainer: {
        alignItems: 'center',
        marginTop: 240
    },

    emptyNoteText: {
        color: color,
        fontWeight: '600',
        fontSize: 15,
    },

    dateContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Notes;
