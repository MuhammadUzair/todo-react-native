import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Header from '../../components/Header';
import styles from './styles';

import OverlayIndicator from '../../components/OverlayIndicator';
import { globalStyles } from '../../assets/styles';

export default class Dashboard extends Component {
  state = {
    todo: []
  };

  componentDidMount() {
    this.props.todoAction();
    // this.props.resetTodo();
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
      <View style={globalStyles.mainContainer}>
        <Text>No todo found</Text>
      </View>
    );
  };

  renderTodo(item, index) {
    const swipeoutSettings = {
      autoClose: true,
      backgroundColor: 'transparent',
      onOpen: (sectionID, rowId, direction) => {
        if (direction == 'left') this.markTodoCompelte(index);
        if (direction == 'right') this.deleteTodo(index);
      },
      onClose: () => console.log('onClose call'),

      right: [
        {
          onPress: () => console.log('right onPress call'),
          text: 'Delete',
          Type: 'Delete'
        }
      ],
      left: [
        {
          onPress: () => console.log('left onPress call'),
          text: item.isCompeleted ? 'Compeleted' : 'Not Compeleted',
          Type: 'primary'
        }
      ],
      rowId: index,
      sectionID: index
    };
    return (
      <Swipeout {...swipeoutSettings}>
        <View>
          <Text
            style={item.isCompeleted && { textDecorationLine: 'line-through' }}
          >
            {item.todoDetail}
          </Text>
        </View>
      </Swipeout>
    );
  }

  render() {
    console.log('todo ', this.state.todo);
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
