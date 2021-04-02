import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Card} from 'react-native-elements';

export default function App() {
  const [choice, setChoice] = useState();
  const [voted, setVoted] = useState(false);

  function changeToRed(value){
    setChoice(value);
    setVoted(true);
  }

  return (
    <View>
      {voted ? (
        <View style={styles.container}>
          <Text style={styles.headerText}>You live in a one story house made entirely of redwood. What color would the stairs be?</Text>
          <Text>You live in a one story house, you have no stairs</Text>
          <Text>You voted for {choice}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.headerText}>You live in a one story house made entirely of redwood. What color would the stairs be?</Text>
          <Card>
            <Button title="Red" onPress={(value) => (changeToRed('red'))}/>
          </Card>
          <Card.Divider/>
          <Card>
            <Button title="Blue" onPress={(value) => (changeToRed('blue'))}/>
          </Card>
          <Card.Divider/>
          <Card>
            <Button title="Green" onPress={(value) => (changeToRed('green'))}/>
          </Card>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
})
