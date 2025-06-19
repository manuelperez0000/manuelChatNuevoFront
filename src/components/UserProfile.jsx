import avatarImages from '../avatars/importers'

const UserProfile = ({myUser}) => {
    return (
        <div className="p-3 bg-light border-bottom d-flex align-items-center">
            <div className="position-relative me-3">
                <div
                    className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white fw-bold"
                    style={{ width: "45px", height: "45px" }}
                >
                    <img src={avatarImages[myUser?.avatar - 1]?.img} className="avatarImg" alt="" />
                </div>
            </div>
            <h6 className="mb-0 text-dark">{myUser?.name} <br /></h6>
        </div>
    )
}

export default UserProfile;