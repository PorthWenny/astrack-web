import List from "../../components/list/List";
import Reserve from "../../components/reserve/Reserve";
import "./profile.scss";

function Profile() {
  return (
    <div className="Profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg"
                alt="_"
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              Email: <b>jdoe1234@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>Favorites</h1>
            <button>Add Favorites</button>
          </div>
          <List />
        </div>
      </div>
      <div className="reserveContainer">
        <div className="wrapper">
          <h1>Your Reservations</h1>
          <button>Create New</button>
          <Reserve />
        </div>
      </div>
    </div>
  );
}

export default Profile;
