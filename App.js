import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
     setCourseGoals(currentGoals => [...currentGoals,
     { id: Math.random().toString(), val:goalTitle }
     ])
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add a New Goal" onPress={() => setAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem
            id={itemData.item.id }
            title={itemData.item.val}
            onDelete={removeGoalHandler}
          />
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
})
