import PropTypes from "prop-types";
import FriendsContext from "../context/FriendsContext";
import { useContext } from "react";

/* étant donnée que je passe maintenant par le context
   je n'ai plus besoin de passer par des props.
   j'ai donc supprimé les props
*/
function FriendList() {

  // TODO replace with context
  const { friends } = useContext(FriendsContext);

  return (
    <div className="FriendList">
      <h2>{friends.length < 2 ? "Your friend" : "Your friends"}</h2>
      {friends.length
        ? friends.map((username) => <p key={username}>{username}</p>)
        : "Add your first friend below"}
      <hr />
    </div>
  );
}


export default FriendList;
