"use client";

import { pusherClient } from "@/lib/pusher/client";
import { useEffect, useState } from "react";

type Message = {
  id: string;
  text: string;
  author: {
    id: string;
    firstName: string;
    avatarUrl: string;
  };
};

export default function MessageList({
  chatId,
  userId,
  initialMessages,
}: {
  chatId: string;
  userId: string;
  initialMessages: Message[];
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  useEffect(() => {
    const channel = pusherClient
      .subscribe(`chat_${chatId}`)
      .bind("new-message", (newMessage: Message) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

    return () => {
      channel.unbind_all();
      pusherClient.unsubscribe(`chat_${chatId}`);
    };
  }, [chatId]);

  return (
    <div className="flex flex-col px-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.author.id === userId ? "justify-end" : "justify-start"}`}
        >
          <div>
            <img
              src={message.author.avatarUrl}
              alt={message.author.firstName}
              className="h-6 w-6 rounded-full "
            />
          </div>
          <div
            className={`${
              message.author.id === userId
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            } m-2 max-w-xs break-words rounded-tr-2xl rounded-b-2xl px-3 pb-2 pt-1`}
          >
               <div>
              <p className="text-xs text-secondary">
              {message.author.id === userId ? "You" : message.author.firstName}
              </p>
               <p>
               {message.text}
               </p>
               </div>
             
          </div>
        </div>
      ))}
    </div>
  );
}
