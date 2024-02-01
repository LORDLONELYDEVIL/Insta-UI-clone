import React from 'react';
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box } from '@chakra-ui/react';


const FeedPost = ({username,img,avatar}) => {
  return (
    <>
    <PostHeader username={username} avatar={avatar}/>
    <Box my={2} borderRadius={4} overflow={"hidden"}>
        <img src={img} alt={username}/>
    </Box>
    <PostFooter username={username}/>
    </>
  )
}

export default FeedPost