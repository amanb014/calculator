import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NotesListScreen } from "./views/notes-list-screen/notes-list.component";

export const Stack = createNativeStackNavigator();

export const AppRouting: React.FC = ({ children }) => {
  return (
    <NavigationContainer>
      {/* @ts-expect-error Navigator cannot be used as a... */}
      <Stack.Navigator initialRouteName="List">
        <Screen
          name="List"
          component={NotesListScreen}
          options={{
            title: "My Calculations",
            presentation: "card",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const Screen = Stack.Screen;
