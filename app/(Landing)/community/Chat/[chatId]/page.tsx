import React from 'react'

export default function page({params}) {
   const {chatId} = params;
  return (
    <div>
      chat {chatId}
    </div>
  )
}
