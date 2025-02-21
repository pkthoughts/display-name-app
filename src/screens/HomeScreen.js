import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import NameDisplay from "../components/NameDisplay";
import AddNameForm from "../components/AddNameForm";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const HomeScreen = () => {
  const names = useQuery(api.names.getAllNames) || [];
  const addName = useMutation(api.names.addName);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Loop through names every two seconds
  useEffect(() => {
    if (names.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [names]);

  // Add a new name to the database
  const handleAddName = async (name) => {
    await addName({ name });
  };

  return (
    <View style={styles.container}>
      <NameDisplay name={names[currentIndex]?.name} />
      <AddNameForm onAddName={handleAddName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
  },
});

export default HomeScreen;
