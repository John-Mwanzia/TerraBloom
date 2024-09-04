'use client'

import { SendHorizontal, Smile } from "lucide-react";
import React, { useRef } from "react";
import ChatMediaShare from "./chat_media_share";
import ChatGifModalButton from "./chat_gifModal_button";
import { sendChatToServer } from "@/utils/api";

export default function ChatForm({ chatId, userId }) {
    const ref = useRef<HTMLFormElement>(null);
    const sendMessage = async (formdata: FormData) => {
        ref.current!.reset();

        // Get the message from the form data
        const message = formdata.get("message");
        console.log("Message:", message);
    
        // You might want to handle sending the message to the server here
        await sendChatToServer({ chatId, userId, text: message });
    
    
      };
  return (
    <div className="w-full flex">
      <div className="flex items-center gap-2">
        <button className="text-[#00FFFF]">
          <Smile />
        </button>

        {/* photos and videos input */}
        <ChatMediaShare />

        <ChatGifModalButton />
      </div>
      <div className="w-full flex-1 px-12">
        <form action={sendMessage} ref={ref} className="flex items-center  gap-4 dark:text-white">
          <input
            name="message"
            type="text"
            placeholder="Type your message here..."
            className="w-full flex-1 rounded-lg border border-blue-500 bg-transparent px-3 py-2 shadow-md shadow-blue-500 outline-none"
          />
          <div>
            <button type="submit" className="text-blue-500">
              <SendHorizontal />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
