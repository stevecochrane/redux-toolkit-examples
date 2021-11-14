import { Flex, Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function Finder() {
  return (
    <Flex alignItems="center">
      <Input
        mr={3}
        placeholder="enter a theme or hashtag to search"
        size="lg"
      />
      <IconButton
        aria-label="Search Twitter"
        colorScheme="blue"
        icon={<SearchIcon />}
      />
    </Flex>
  );
}
