import React, { useState } from "react";
import { Flex, Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { NumberOfResults } from "../numberOfResults/NumberOfResults";
import { findTweets } from "./findTweets";

export function Finder() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = async () => {
    if (searchValue) {
      setSearchValue("");
      const data = await findTweets(searchValue, 10);
      console.log({ data });
    }
  };

  return (
    <>
      <Flex alignItems="center">
        <Input
          mr={3}
          onChange={(evt) => setSearchValue(evt.target.value)}
          placeholder="enter a theme or hashtag to search"
          size="lg"
          value={searchValue}
        />
        <IconButton
          aria-label="Search Twitter"
          colorScheme="blue"
          icon={<SearchIcon />}
          onClick={handleSearch}
        />
      </Flex>
      <NumberOfResults />
    </>
  );
}
