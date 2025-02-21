import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../src/screens/HomeScreen";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { CONVEX_URL } from "@env";

const convex = new ConvexReactClient(CONVEX_URL);

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </ConvexProvider>
  );
}
