import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NotesListScreen } from "./views/notes-list-screen/notes-list.component";
import { useRealm } from "./contexts/storage/storage.context";

export const Stack = createNativeStackNavigator();

export const AppRouting = () => {
  const realm = useRealm();
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
