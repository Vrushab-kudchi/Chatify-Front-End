import ChatItem from "../shared/ChatItem";

export default function ChatList({
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "1",
      count: 0,
    },
  ],
  handleDeleteChat,
}) {
  return (
    <div className="w-full">
      {chats?.map((data, index) => {
        const { Avatar, _id, name, groupChat, members } = data;
        const newMessageAlert = newMessagesAlert.find(
          (alert) => alert.chatId === _id
        );
        const isOnline = members?.some((member) => onlineUsers.includes(_id));

        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={Avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChatOpen={handleDeleteChat}
          />
        );
      })}
    </div>
  );
}
