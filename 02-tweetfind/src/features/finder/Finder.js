import React, { useState } from "react";
import TweetEmbed from "react-tweet-embed";
import { Flex, Input, IconButton, Wrap, WrapItem } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { NumberOfResults } from "../numberOfResults/NumberOfResults";
import { findTweets } from "./findTweets";

export function Finder() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    if (searchValue) {
      setSearchValue("");
      const data = await findTweets(searchValue, 10);
      setData(data);
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
      <Wrap mt={5}>
        {data.map((tweet) => (
          <WrapItem key={tweet.id}>
            <TweetEmbed id={tweet.id} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}
