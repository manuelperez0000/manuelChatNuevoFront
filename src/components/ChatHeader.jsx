import avatarImages from '../avatars/importers.js';

const ChatHeader = ({ selectedContact }) => {
    return (
        <div className="p-3 bg-light border-bottom d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div className="position-relative me-3">
                    <div
                        className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white fw-bold"
                        style={{ width: "45px", height: "45px" }}
                    >
                        <img src={avatarImages[selectedContact.avatar - 1]?.img} className="avatarImg" alt="" />

                    </div>
                </div>
                <div>
                    {selectedContact.name ? (
                        <h6 className="mb-0 text-dark">{selectedContact.name}</h6>
                    ) : (
                        <h6 className="mb-0 text-dark">Selecciona un contacto</h6>
                    )}
                </div>
            </div>
            <div>
                {/*boton de regresar al lobby*/}
                <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => window.location.href = "/"}
                >
                    <i className="bi bi-arrow-left"></i> Regresar al Lobby
                </button>
            </div>
        </div>
    )
}

export default ChatHeader;