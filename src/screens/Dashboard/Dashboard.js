import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
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
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    const { getTodo } = nextProps;
    return {
      todo: getTodo.todo
    };
  }

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

  render() {
    console.log('todo ', this.state.todo);
    return (
      <>
        <View style={styles.container}>
          <Header text="Dashboard" />

          <FlatList
            style={[globalStyles.flexContainer]}
            data={this.state.todo}
            renderItem={({ item, index }) => {
              return <Text>{item.todoDetail}</Text>;
            }}
            onEndReachedThreshold={0.1}
            onRefresh={this.onRefresh}
            refreshing={false}
            ListEmptyComponent={this.emptyList()}
            keyExtractor={(item, index) => `id:${index},index:${index}`}
            onMomentumScrollBegin={() => {
              this.onEndReachedCalledDuringMomentum = false;
            }}
          />
        </View>

        {false ? <OverlayIndicator /> : null}
      </>
    );
  }
}
