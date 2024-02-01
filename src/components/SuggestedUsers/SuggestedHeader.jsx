import React from 'react';
import { Link, Link as RouterLink } from "react-router-dom";
import { Avatar, Button, Flex, Text, } from "@chakra-ui/react";


const SuggestedHeader = () => {
  return (
    <>
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				
					<Avatar size={"sm"} src='../../../public/v.jpg' />
				
				
					<Text fontSize={12} fontWeight={"bold"}>
					lordlonelydevil
					</Text>
				
			</Flex>

			<Link

                  as={RouterLink}
                to={"/auth"}
				size={"xs"}
				background={"transparent"}
				_hover={{ background: "transparent" }}
				fontSize={14}
				fontWeight={"medium"}
				color={"blue.400"}
				cursor={"pointer"}
			> Log out</Link>
				
			
		</Flex>

    </>
  )
}

export default SuggestedHeader