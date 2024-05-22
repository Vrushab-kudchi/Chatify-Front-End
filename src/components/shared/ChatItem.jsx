import { Link } from "react-router-dom";

export default function ChatItem({
  avatar = [],
  name,
  _id,
  newMessageAlert,
  groupChat = false,
  sameSender,
  isOnline,
  newMessage,
  index = 0,
  handleDeleteChatOpen,
}) {
  return (
    <div className="">
      <Link to={`/chat/${_id}`}>
        <div className=" bg-slate-200 p-5 m-4 rounded-lg">
          <div className="flex justify-between">
            {name}
            {isOnline ? (
              <div className="right-4 top-10 w-2 h-2 bg-green-500 rounded-full"></div>
            ) : null}
          </div>
          {newMessageAlert ? (
            <div>You have {newMessageAlert?.count} new Message</div>
          ) : null}
        </div>
      </Link>
    </div>
  );
}
