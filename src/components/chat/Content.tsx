import React from 'react';
import UserMessage from "@/components/chat/UserMessage";
import SystemMessage from "@/components/chat/SystemMessage";
import NoSSR from "@/components/NoSSR";
import ScrollToBottom from "react-scroll-to-bottom";
import {useSelector} from "react-redux";
import {selectMessages} from "@/redux/reducers/chatSlice";

const Content = () => {
    const messages = useSelector(selectMessages);
    return (
        <div className="relative flex-1 h-full">
            <div className="flex items-center justify-between border-b border-[#f2f2f2] px-[2rem] pb-6 dark:border-[#484848]">
                <div className="items-left flex flex-col justify-between">
                                
            
                <div className="text-center">
  <div className="pb-1 text-lg dark:text-white">Hey there!</div>
  <div className="pr-5 text-sm text-gray-400">My name is Real Estate Genios and I'm a software engineer. Give me coding tasks and I will try my best to solve them!</div>
</div>



                </div>
            </div>
            <NoSSR>
                {messages.length > 0 ? (
                    <ScrollToBottom
                        initialScrollBehavior="auto"
                        followButtonClassName="scroll-to-last-message"
                        className="!absolute top-0 flex flex-col w-full h-full overflow-x-hidden overflow-y-auto"
                    >
                        {messages.map((message, index) =>
                            message.role === "user" ?
                                <UserMessage key={index} message={message.content} />
                                : <SystemMessage key={index} message={message.content} />
                        )}
                    </ScrollToBottom>
                ) : (
                    <div className="flex flex-col items-center my-16">
                        <h1 className="text-3xl font-bold text-center">Real Estate Genius</h1>
                        <p className="text-gray-400 mt-2 text-center">Your AI Real Estate Agent</p>
                    </div>
                )}
            </NoSSR>
        </div>
    );
};

export default Content;
