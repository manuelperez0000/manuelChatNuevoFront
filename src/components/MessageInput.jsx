const MessageInput = ({ newMessage,
    setNewMessage,
    handleKeyPress,
    handleSendMessage }) => {
    return (
        <div className="p-3 bg-white border-top">
            <div className="d-flex align-items-center gap-2">
                <div className="flex-grow-1">
                    <input
                        type="text"
                        className="form-control"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyUp={handleKeyPress}
                        placeholder="Escribe un mensaje"
                    />
                </div>
                <button onClick={handleSendMessage} className="btn btn-success btn-sm">
                    <i className="bi bi-send"></i>
                </button>
            </div>
        </div>
    )
}
export default MessageInput;