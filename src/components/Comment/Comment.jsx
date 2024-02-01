import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Comment = ({ createdAt,username,profilePic,text }) => {
	

	
	return (
		<Flex gap={4}>
			
				<Avatar src={profilePic} size={"sm"} />
			
			<Flex direction={"column"}>
				<Flex gap={2} alignItems={"center"}>
					
						<Text fontWeight={"bold"} fontSize={12}>
							{username}
						</Text>
					
					<Text fontSize={14}>{text}</Text>
				</Flex>
				<Text fontSize={12} color={"gray"}>
					{createdAt}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Comment;

const CommentSkeleton = () => {
	return (
		<Flex gap={4} w={"full"} alignItems={"center"}>
			<SkeletonCircle h={10} w='10' />
			<Flex gap={1} flexDir={"column"}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</Flex>
		</Flex>
	);
};
