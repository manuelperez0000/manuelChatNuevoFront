"use client"

import MessageInput from "../components/MessageInput"
import Messages from "../components/Messages"
import useChat from "../hooks/useChat"
import ChatHeader from "../components/ChatHeader"
import Sidebar from "../components/sidebar"

function Chat() {

  const { handleKeyPress, users,
    filteredChats, myUser,
    selectedContact, setSelectedContact,
    newMessage, setNewMessage,
    handleSendMessage, formatearFecha } = useChat()

  return (
    <div className="container-fluid p-0" style={{ height: "100vh" }}>
      <div className="row g-0 h-100">

        <Sidebar setSelectedContact={setSelectedContact} myUser={myUser} users={users} selectedContact={selectedContact} />

        <div className="col-8 d-flex flex-column h-100">

          <ChatHeader selectedContact={selectedContact} />

          <Messages filteredChats={filteredChats} myUser={myUser} formatearFecha={formatearFecha} />

          <MessageInput
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            handleKeyPress={handleKeyPress}
            handleSendMessage={handleSendMessage}
          />

        </div>
      </div>
    </div>
  )
}

export default Chat
