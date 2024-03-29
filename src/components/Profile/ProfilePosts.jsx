import React, { useEffect, useState } from 'react';
import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from './ProfilePost';

const ProfilePosts = () => {
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },2000)
    },[])
  return (
    <>
    <Grid
			templateColumns={{
				sm: "repeat(1, 1fr)",
				md: "repeat(3, 1fr)",
			}}
			gap={1}
			columnGap={1}
		>
			{isLoading &&
				[0, 1, 2].map((_, idx) => (
					<VStack key={idx} alignItems={"flex-start"} gap={4}>
						<Skeleton w={"full"}>
							<Box h='300px'>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}

			{!isLoading && (
				<>
                <ProfilePost img='../../../public/v.jpg' />
                <ProfilePost img='../../../public/i.jpg' />
                <ProfilePost img='../../../public/c.jpg' />
                <ProfilePost img='../../../public/k.jpg' />
					{/*posts.map((post) => (
						<ProfilePost post={post} key={post.id} />
					))*/}
				</>
                    )}
		</Grid>

    </>
  )
}

export default ProfilePosts