import React, { Component } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Header from '../../components/Header';
import Circle from '../../components/Circle';
import OverlayIndicator from '../../components/OverlayIndicator';
import { globalStyles, baseGreen } from '../../assets/styles';
import { renderFormatedDate } from '../../utils';
import styles from './styles';

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
          backgroundColor: baseGreen
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
              {item.dueDate ? renderFormatedDate(item.dueDate) : '-'}
            </Text>
          </View>
        </View>
      </Swipeout>
    );
  }

  render() {
    const {
      getTodo: {
        todo: { status }
      }
    } = this.props;
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

        {status == 'inprocess' ? <OverlayIndicator /> : null}
      </>
    );
  }
}
