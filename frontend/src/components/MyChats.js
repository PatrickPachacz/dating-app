import React from 'react'
import { ChatState } from "../Context/ChatProvider";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { Box, Stack, Text } from "@chakra-ui/layout";
import ChatLoading from "./ChatLoading";
import { getSender } from "../config/ChatLogics";


const MyChats = ({ fetchAgain }) => {
    const [loggedUser, setLoggedUser] = useState(null);
    const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
    
    const toast = useToast();

    const fetchChats = async () => {
        // console.log(user._id);
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };
    
          const { data } = await axios.get("/api/chat", config);
          console.log(data)
          setChats(data);
        } catch (error) {
          toast({
            title: "Error Occured!",
            description: "Failed to Load the chats",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
          });
        }
      };

      useEffect(() => {
        const userFromLocalStorage = JSON.parse(localStorage.getItem("userInfo"));
        setLoggedUser(userFromLocalStorage); // Update loggedUser with the user from local storage
        fetchChats();
        // eslint-disable-next-line
      }, [fetchAgain]);
    

      return (
        <Box
          d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
          flexDir="column"
          alignItems="center"
          p={3}
          bg="white"
          w={{ base: "46%", md: "26%" }}
          borderRadius="lg"
          borderWidth="1px"
        >
          <Box
            pb={3}
            px={5}
            fontSize={{ base: "10px", md: "20px" }}
            fontFamily="Work sans"
            d="flex"
            w="50%"
            justifyContent="space-between"
            alignItems="center"
          >
            My Chats
            

          </Box>
          <Box
            d="flex"
            flexDir="column"
            p={3}
            bg="#F8F8F8"
            w="100%"
            h="87%"
            borderRadius="lg"
            overflowY="hidden"
          >
            {chats ? (
              <Stack overflowY="scroll">
                {chats.map((chat) => (
                  <Box
                    onClick={() => setSelectedChat(chat)}
                    cursor="pointer"
                    bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                    color={selectedChat === chat ? "white" : "black"}
                    px={3}
                    py={2}
                    borderRadius="lg"
                    key={chat._id}
                  >

                    <Text>
                    {!chat.isGroupChat && loggedUser ? getSender(loggedUser, chat.users) : chat.chatName}
                    </Text>
                  </Box>

                ))}
              </Stack>
            ) : (
              <ChatLoading />
            )}
          </Box>
        </Box>
      );
    };

export default MyChats