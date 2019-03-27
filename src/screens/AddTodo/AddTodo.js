import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Header from '../../components/Header';
import FlatButton from '../../components/FlatButton';
import UserInput from '../../components/UserInput';
import Circle from '../../components/Circle';
import { globalStyles } from '../../assets/styles';
import styles from './styles';

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

  onSubmit = async () => {
    const { todoDetail, date, selectedTag } = this.state;
    let todo = {
      todoDetail,
      selectedTag,
      createdDate: date
    };
    console.log('submit ', todo);
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
          maximumDate={new Date()}
        />

        <View style={[globalStyles.flexHorizontal, styles.tagsWrap]}>
          {this.renderTags()}
        </View>

        <FlatButton
          text="Add"
          onpress={this.onSubmit}
          backgroundColor={true}
          buttonStyle={styles.addButtonStyle}
        />
      </View>
    );
  }
}
