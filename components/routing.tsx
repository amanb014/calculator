import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export const Stack = createNativeStackNavigator();

export const AppRouting: React.FC = ({ children }) => {
  return (
    <NavigationContainer>
      {/* @ts-expect-error Navigator cannot be used as a... */}
      <Stack.Navigator>{children}</Stack.Navigator>
    </NavigationContainer>
  );
};

export const Screen = Stack.Screen;
