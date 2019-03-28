import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';
import moment from 'moment';
import Header from '../../components/Header';
import Circle from '../../components/Circle';
import styles from './styles';

import OverlayIndicator from '../../components/OverlayIndicator';
import { globalStyles } from '../../assets/styles';

export default class Dashboard extends Component {
  state = {
    todo: []
  };

  componentDidMount() {
    this.props.todoAction();
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    const { getTodo } = nextProps;
    return {
      todo: getTodo.todo
    };
  }

  markTodoCompelte = index => {
    let todo = [...this.state.todo];
    todo[index].isCompeleted = !todo[index].isCompeleted;
    this.props.todoAction({ todo, isSave: true });
  };

  deleteTodo = index => {
    let todo = [...this.state.todo];

    Alert.alert(
      'Are you sure ?',
      `You won't be able to revert this!`,
      [
        {
          text: 'Yes,delete it!',
          onPress: () => {
            todo.splice(index, 1);
            this.props.todoAction({ todo, isSave: true });
            this.forceUpdate();
          }
        },
        {
          text: 'Cancel',
          onPress: () => {}
        }
      ],
      { cancelable: false }
    );
  };

  onRefresh = () => {
    this.props.todoAction();
  };

  emptyList = () => {
    return (
      <View style={styles.todoRow}>
        <Text>No todo found</Text>
      </View>
    );
  };

  renderDate = dueDate => {
    let getFormatedDate = moment(new Date(dueDate)).fromNow();
    if (getFormatedDate == 'a day ago') getFormatedDate = 'tomorrow';
    if (getFormatedDate == 'in a day') getFormatedDate = 'yesterday';
    return 'Due ' + getFormatedDate;
  };

  renderTodo(item, index) {
    const swipeoutSettings = {
      autoClose: true,
      backgroundColor: 'transparent',
      onOpen: (sectionID, rowId, direction) => {
        if (direction == 'left') this.markTodoCompelte(index);
        if (direction == 'right') this.deleteTodo(index);
      },
      right: [],
      left: [
        {
          text: item.isCompeleted ? 'Compelete' : 'Incomplete',
          Type: 'primary'
        }
      ],
      rowId: index,
      sectionID: 1
    };
    return (
      <Swipeout {...swipeoutSettings}>
        <View style={[styles.todoRow, globalStyles.flexHorizontal]}>
          <Circle
            color={item.selectedTag}
            circleStyle={styles.circleStyle}
            isActive={true}
            smallCircle={true}
          />
          <View style={styles.todoTextWrap}>
            <Text
              style={[
                globalStyles.boldFontFace,
                globalStyles.baseFontSize,
                item.isCompeleted && styles.compeltedTodoTextStyle
              ]}
            >
              {item.todoDetail ? item.todoDetail : '-'}
            </Text>
            <Text style={item.isCompeleted && styles.compeltedDateTextStyle}>
              {item.dueDate ? this.renderDate(item.dueDate) : '-'}
            </Text>
          </View>
        </View>
      </Swipeout>
    );
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Header text="Dashboard" />

          <FlatList
            style={[globalStyles.flexContainer]}
            data={this.state.todo}
            renderItem={({ item, index }) => this.renderTodo(item, index)}
            onEndReachedThreshold={0.1}
            onRefresh={this.onRefresh}
            refreshing={false}
            ListEmptyComponent={this.emptyList()}
            keyExtractor={(item, index) => `id:${index},index:${index}`}
            onMomentumScrollBegin={() => {
              this.onEndReachedCalledDuringMomentum = false;
            }}
            extraData={this.state.todo}
          />
        </View>

        {false ? <OverlayIndicator /> : null}
      </>
    );
  }
}
