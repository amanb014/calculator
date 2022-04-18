import React from "react";
import { Box, Pressable, Text, VStack } from "native-base";
import { NotesListItem } from "../notes-list-item";

const notesList = [
  {
    id: 1,
    title: "TestTitle One",
    updatedAt: new Date("4/5/2022"),
    content: [
      "line 1",
      "line 2",
      "line 3",
      "line 4",
      "line 5",
      "line 6",
      "line 7",
    ],
  },
  {
    id: 2,
    title: "TestTitle 2",
    updatedAt: new Date("4/6/2022"),
    content: [
      "line 4",
      "line 6",
      "line 33",
      "line 46",
      "line 58",
      "line 60",
      "line 73",
    ],
  },
  {
    id: 3,
    title: "TestTitle 2",
    updatedAt: new Date("4/2/2022"),
    content: [
      "line 4",
      "line 6",
      "line 33",
      "line 46",
      "line 58",
      "line 60",
      "line 73",
    ],
  },
  {
    id: 4,
    title: "TestTitle 2",
    updatedAt: new Date("3/29/2022"),
    content: [
      "line 4",
      "line 6",
      "line 33",
      "line 46",
      "line 58",
      "line 60",
      "line 73",
    ],
  },
  {
    id: 6,
    title: "TestTitle 2",
    updatedAt: new Date("3/25/2022"),
    content: [
      "line 4",
      "line 6",
      "line 33",
      "line 46",
      "line 58",
      "line 60",
      "line 73",
    ],
  },
  {
    id: 7,
    title: "TestTitle 2",
    updatedAt: new Date("2/24/2022"),
    content: [
      "line 4",
      "line 6",
      "line 33",
      "line 46",
      "line 58",
      "line 60",
      "line 73",
    ],
  },
  {
    id: 5,
    title: "TestTitle 222222",
    updatedAt: new Date("3/29/2021"),
    content: [
      "line 4",
      "line 6",
      "line 33",
      "line 46",
      "line 58",
      "line 60",
      "line 73",
    ],
  },
];

export const NotesListComponent = () => {
  return (
    <VStack>
      {notesList.map((note, index) => (
        <Pressable key={note.id}>
          {({ isPressed }) => (
            <NotesListItem note={note} isPressed={isPressed} />
          )}
        </Pressable>
      ))}
    </VStack>
  );
};
