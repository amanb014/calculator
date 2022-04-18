import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { AppRouting } from "./components/routing";
import { NotesListScreen } from "./components/views/notes-list-screen/notes-list.component";
import { Screen } from "./components/routing";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider>
      <AppRouting>
        <Screen
          name="List"
          component={NotesListScreen}
          options={{ title: "My Calculations" }}
        />
      </AppRouting>
    </NativeBaseProvider>
  );
}

// // Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light"}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
