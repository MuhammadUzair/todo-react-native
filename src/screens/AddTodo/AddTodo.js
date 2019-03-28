import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Header from '../../components/Header';
import FlatButton from '../../components/FlatButton';
import UserInput from '../../components/UserInput';
import Circle from '../../components/Circle';
import { globalStyles } from '../../assets/styles';
import styles from './styles';
import UUID from 'uuid/v1';

export default class AddTodo extends Component {
  state = {
    todoDetail: '',
    isdatePickerVisible: false,
    date: '',
    tags: [
      { color: 'blueCircle', status: true },
      { color: 'greenCircle', status: false },
      { color: 'redCircle', status: false },
      { color: 'purpleCircle', status: false },
      { color: 'yellowCircle', status: false }
    ],
    selectedTag: 'blueCircle'
  };

  componentDidMount() {
    this.props.todoAction();
  }

  onTodoDetailChange = todoDetail => {
    this.setState({ todoDetail });
  };

  showdatePicker = () =>
    this.setState({
      isdatePickerVisible: true
    });

  hidedatePicker = () => this.setState({ isdatePickerVisible: false });

  handledatePicked = pickerDate => {
    this.setState({ date: pickerDate.toString() });
    this.hidedatePicker();
  };

  onTagPressed = selectedIndex => {
    const tags = this.state.tags.map(item => {
      item.status = false;
      return item;
    });
    tags[selectedIndex].status = true;
    this.setState({ tags, selectedTag: tags[selectedIndex].color });
  };

  renderTags = () => {
    const { tags } = this.state;
    return tags.map((item, i) => (
      <Circle
        color={item.color}
        circleStyle={styles.circleStyle}
        onPress={() => this.onTagPressed(i)}
        isActive={item.status}
        key={i}
      />
    ));
  };

  onSubmit() {
    const { todoDetail, date, selectedTag } = this.state;
    let todo = this.props.getTodo.todo;
    todo.push({
      todoDetail,
      selectedTag,
      createdDate: new Date().toString(),
      dueDate: date,
      isCompeleted: false,
      id: UUID().substr(0, 8) //unique id timestamp based
    });
    this.props.todoAction({ todo, isSave: true });
    this.renderAlert();

    this.setState({
      todoDetail: '',
      date: '',
      selectedTag: 'blueCircle'
    });
  }

  renderAlert = () => {
    Alert.alert(
      'Todo add successfully',
      '',
      [
        {
          text: 'Go to Dashboad',
          onPress: () => this.props.navigation.navigate('Dashboard')
        },
        {
          text: 'OK',
          onPress: () => {}
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { date } = this.state;
    return (
      <View style={styles.container}>
        <Header text="Add" />

        <UserInput
          value={this.state.todoDetail}
          onChangeText={this.onTodoDetailChange}
          placeholder="What do you need to do ?"
          inputStyle={[styles.userInput, globalStyles.baseFontSize]}
          multiline={true}
        />

        <TouchableOpacity
          style={styles.datePickerWrap}
          onPress={() =>
            this.setState({
              isdatePickerVisible: !this.state.isdatePickerVisible
            })
          }
        >
          <Text style={styles.datePickerText}>
            {date ? date.substr(0, 24) : 'When is it due ?'}
          </Text>
        </TouchableOpacity>

        <DateTimePicker
          mode="datetime"
          isVisible={this.state.isdatePickerVisible}
          onConfirm={this.handledatePicked}
          onCancel={this.hidedatePicker}
          is24Hour={true}
        />

        <View style={[globalStyles.flexHorizontal, styles.tagsWrap]}>
          {this.renderTags()}
        </View>

        <FlatButton
          text="Add"
          onpress={() => this.onSubmit()}
          backgroundColor={true}
          buttonStyle={styles.addButtonStyle}
        />
      </View>
    );
  }
}
