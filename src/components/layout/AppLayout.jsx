import { useParams } from "react-router-dom";
import { sampleChats } from "../Constants/SampleData";
import Title from "../shared/Title";
import ChatList from "../specific/ChatList";
import Header from "./Header";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      console.log("delete Chat",_id,groupChat)
    }

    return (
      <>
        <Title />
        <Header />
        <div className="grid grid-cols-12 h-screen pt-16">
          <div className="col-span-3 overflow-y-auto">
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              newMessagesAlert={[
                {
                  chatId,
                  count: 4,
                },
              ]}
              onlineUsers={["1", "5"]}
              handleDeleteChat={handleDeleteChat}
            />
          </div>
          <div className="col-span-6 bg-gray-400">
            <WrappedComponent {...props} />
          </div>
          <div className="col-span-3 bg-black text-white">third</div>
        </div>
      </>
    );
  };
};

export default AppLayout;
