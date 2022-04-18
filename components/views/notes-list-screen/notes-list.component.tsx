import React from "react";
import { NotesListComponent } from "../../organisms/notes-list";
import { ScrollBackground } from "../../atoms/scroll-background.component";

export const NotesListScreen = () => {
  return (
    <ScrollBackground>
      <NotesListComponent />
    </ScrollBackground>
  );
};
