import { Container, Skeleton, SkeletonCircle, VStack,Flex,Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{setIsLoading(false)},2000)
    },[])
  return (
    <Container maxW={"container.sm"}py={10} px={2}>
        {isLoading &&
        [1,2,3,4].map((_,idx)=>(
            <VStack key={"idx"} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap={2}>
                    <SkeletonCircle size={10}/>
                    <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height={"10px"} width={"200px"}/>
                        <Skeleton height={"10px"} width={"200px"}/>
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"500px"}>Contents wrapped</Box>
                </Skeleton>


            </VStack>
            ))}
            {!isLoading&&(
                <>
                      <FeedPost img='../../../public/emma.jpg' username="sunny babe" avatar='../../../public/emma.jpg' />
                      <FeedPost img='../../../public/devil.jpg' username="easy-tc" avatar='../../../public/devil.jpg' />
                      <FeedPost img='../../../public/v.jpg' username="lordloneldevil" avatar='../../../public/v.jpg'/>
                      <FeedPost img='../../../public/k.jpg' username="sotta_sorugidven" avatar='../../../public/k.jpg' />


                </>
            )}
       
    </Container>
  )
}

export default FeedPosts