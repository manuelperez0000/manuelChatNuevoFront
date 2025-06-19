import UserProfile from "./UserProfile";
import avatarImages from "../avatars/importers"
const Sidebar = ({ myUser, users, selectedContact, setSelectedContact }) => {

    return (
        <div className="col-4 bg-white border-end h-100">
            <div className="d-flex flex-column h-100">
         
                <UserProfile myUser={myUser} />

                {/* usuarios */}
                <div className="px-2 py-2 bg-light border-bottom">
                    <div className="d-flex justify-content-between align-items-center mb-0">
                        <h4 className="mb-0 text-dark">Usuarios</h4>
                    </div>
                </div>

                {/* Contactos */}
                <div className="flex-grow-1 overflow-auto">
                    {users.filter((user) => user.name !== myUser.name).map((contact) => (
                        <div
                            key={contact._id}
                            className={`p-3 border-bottom cursor-pointer ${selectedContact._id === contact._id ? "bg-success bg-opacity-10" : ""
                                }`}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedContact(contact)}
                            onMouseEnter={(e) => {
                                if (selectedContact._id !== contact._id) {
                                    e.target.closest("div").style.backgroundColor = "#f8f9fa"
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedContact._id !== contact._id) {
                                    e.target.closest("div").style.backgroundColor = "transparent"
                                }
                            }}
                        >
                            <div className="d-flex align-items-center bg-trasparent">
                                <div className="position-relative me-3">
                                    <div
                                        className="rounded-circle bg-secondary d-flex align-items-center justify-content-center fw-bold"
                                        style={{ width: "50px", height: "50px" }}
                                    >
                                        <img src={avatarImages[contact.avatar - 1].img} className="avatarImg" alt="" />
                                    </div>

                                    {/* {contact.online && (
                        <span
                          className="position-absolute bottom-0 end-0 bg-success rounded-circle border border-white"
                          style={{ width: "15px", height: "15px" }}
                        ></span>
                      )} */}
                                </div>

                                <div className="flex-grow-1">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="mb-0 text-dark">{contact.name}</h6>

                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-1">
                                        <p className="mb-0 text-muted small text-truncate" style={{ maxWidth: "200px" }}>

                                        </p>
                                        {/* {contact.unread && <span className="badge bg-success rounded-pill">{contact.unread}</span>} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;