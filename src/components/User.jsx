import PropTypes from "prop-types";
import { useContext } from "react";
import FriendsContext from "../context/FriendsContext";

/* étant donnée que je passe maintenant par le context
   je n'ai plus besoin de passer par les props friends et setFriends.
   vu que je les récupère via le context
*/
function User(props) {
  const { username, name, email } = props;

  // TODO replace with context
  const { friends, setFriends } = useContext(FriendsContext);

  function addFriend() {
    if (friends.includes(username)) {
      setFriends(friends.filter((user) => user !== username));
    } else {
      setFriends([username, ...friends]);
    }
  }

  return (
    <div className="User">
      <h3>{username}</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={addFriend}>
        {friends.includes(username) ? "Unfollow" : "Follow"}
      </button>
      <hr />
    </div>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
