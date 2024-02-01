import React from 'react';
import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import ProfileHeader from '../../components/Profile/ProfileHeader';
import ProfileTabs from '../../components/Profile/ProfileTabs';
import ProfilePost from '../../components/Profile/ProfilePost';
import ProfilePosts from '../../components/Profile/ProfilePosts';

const ProfilePage = () => {
  return (
    <>
    <Container maxW='container.lg' py={5}>
			<Flex py={10} px={4} pl={{ base: 4, md: 10 }} w={"full"} mx={"auto"} flexDirection={"column"}>
				{/*{!isLoading && userProfile && <ProfileHeader />}
				{isLoading && <ProfileHeaderSkeleton />} */}
			
            <ProfileHeader />
            </Flex>
            <Flex
            px={{ base: 2, sm: 4 }}
            maxW={"full"}
            mx={"auto"}
            borderTop={"1px solid"}
            borderColor={"whiteAlpha.300"}
            direction={"column"}
>
                <ProfileTabs />
                <ProfilePosts/>

            </Flex>
    </Container>
    </>
  )
}

export default ProfilePage