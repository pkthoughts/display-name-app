import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddNameForm = ({ onAddName }) => {
  const [newName, setNewName] = useState("");

  const handleAddName = () => {
    if (newName.trim()) {
      onAddName(newName);
      setNewName("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new name"
        value={newName}
        onChangeText={setNewName}
      />
      <Button title="Add Name" onPress={handleAddName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
});

export default AddNameForm;
