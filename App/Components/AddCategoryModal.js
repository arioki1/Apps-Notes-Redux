import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {insertCategories} from "../Services/Redux/action/notes";
import {connect} from 'react-redux';

class AddCategoryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            name: '',
            image: ''
        };
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        });
    }

    closeModal() {
        this.props.changeModalVisibilty(false);
    }

    createCategory() {
        let data = {
            name: this.state.name,
            image: this.state.image
        };

        this.props.dispatch(insertCategories(data))
    }

    render() {

        return (
            <TouchableOpacity
                activeOpacity={1}
                disable={true}
                onPress={() => this.closeModal()}
                style={[styles.contentContainer]}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={{opacity: 1}}
                >
                    <View
                        style={[styles.modal, {
                            width: this.state.width - 80
                        }]}>
                        <TextInput
                            placeholder="Category Name"
                            underlineColorAndroid="#2ED1A2"
                            onChangeText={(name) => this.setState({name})}
                            style={{
                                width: this.state.width - 120
                            }}
                        />
                        <TextInput
                            placeholder="Image Url"
                            underlineColorAndroid="#2ED1A2"
                            onChangeText={(image) => this.setState({image})}
                            style={{
                                width: this.state.width - 120
                            }}
                        />
                        <View style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            flexDirection: 'row',
                            marginTop: 20,
                            width: this.state.width - 120
                        }}>
                            <Text
                                onPress={() => this.createCategory()}
                                style={{
                                fontWeight: 'bold',
                                marginRight: 10,
                                fontSize: 20,
                            }}>Add</Text>
                            <Text
                                onPress={() => this.closeModal()}
                                style={{
                                    fontSize: 20,
                                }}>Cancel</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}

const MapsStateToProps = (state) => {
    return {
        notes: state.notes
    }
};

export default connect(MapsStateToProps)(AddCategoryModal);

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        opacity: 0.9

    },
    modal: {
        height: 170,
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        opacity: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }

});


