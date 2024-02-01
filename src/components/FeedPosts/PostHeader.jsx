import React from 'react';
import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const PostHeader = ({username,avatar}) => {
  return (
    <>
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar src={avatar} alt='user profile pic' size={"sm"}/>
            <Flex fontSize={12} fontWeight={"bold"} gap='2'>
                {username}
                <Box color={"gray.500"}>. 1w</Box>
            </Flex>
        </Flex>
        <Box cursor={"pointer"}>
            <Text
            fontFamily={12}
            color={"blue.500"}
            fontWeight={"bold"}
            _hover={{color:"white"}}
            transition={"0.2 ease-in-out"}
            >
                Unfollow
            </Text>
        </Box>
    </Flex>
    </>
  )
}

export default PostHeader