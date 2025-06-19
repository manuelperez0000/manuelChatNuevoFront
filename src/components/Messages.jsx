const Messages = ({filteredChats, myUser, formatearFecha}) => {

    return (
        <div className="flex-grow-1 p-3 overflow-auto" >
            <div className="d-flex flex-column gap-3">
                {filteredChats.map((message) => (
                    <div
                        key={message._id}
                        className={`d-flex ${myUser._id === message.fromId ? "justify-content-end" : "justify-content-start"}`}
                    >
                        <div className={`px-3 py-2 rounded-3 position-relative ${myUser._id === message.fromId ? "bg-success text-white" : "bg-white text-dark border"}`}
                            style={{ maxWidth: "70%" }}>
                            <p className="mb-1 small">{message.message}</p>
                            <div className={`d-flex align-items-center justify-content-end gap-1 ${myUser._id === message.fromId ? "text-white-50" : "text-muted"}`}>
                                <small style={{ fontSize: "0.7rem" }}>{formatearFecha(message?.createdAt)}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Messages;