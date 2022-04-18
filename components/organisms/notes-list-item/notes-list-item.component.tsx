import React, { useMemo } from "react";
import { Box, Heading, Text } from "native-base";
import { Dayjs } from "../../../utilities/dayjs";
import { withinLastMonth } from "../../../utilities/dates";

export interface NotesListItemProps {
  note: Pick<Note, "title" | "content" | "updatedAt">;
  isPressed: boolean;
}
export const NotesListItem = ({ note, isPressed }: NotesListItemProps) => {
  const useDayJs = withinLastMonth(note.updatedAt);

  const displayDate = useMemo(() => {
    const now = new Date();
    const dayObject = Dayjs(note.updatedAt);
    if (useDayJs) {
      return dayObject.from(now);
    }
    const addYear = now.getFullYear() !== note.updatedAt.getFullYear();
    const format = addYear ? "MMMM D, YYYY" : "MMMM D";
    return "on " + dayObject.format(format);
  }, [note, useDayJs]);

  return (
    <Box
      style={{
        transform: [{ scale: isPressed ? 0.98 : 1 }],
      }}
      bg="white"
      borderRadius="2xl"
      px={3}
      py={3}
      my={2}
      mx={3}
      borderWidth="1"
      borderColor="coolGray.300"
      rounded="8"
      flexDir="column"
    >
      <Heading size="sm">{note.title}</Heading>
      <Text fontSize="sm" fontWeight="light">
        {note.content[0]}
      </Text>
      <Box display="flex" flexDir="row" justifyContent="space-between">
        <Text>General</Text>
        <Box>
          <Text>{displayDate}</Text>
        </Box>
      </Box>
    </Box>
  );
};
