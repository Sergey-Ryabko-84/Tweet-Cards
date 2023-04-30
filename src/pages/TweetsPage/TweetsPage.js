import { useEffect, useState } from "react";
import TweetCard from "../../components/TweetCard/TweetCard";
import { fetchUsers } from "../../services/api/usersApi";
import LoadMore from "../../components/LoadMore/LoadMore";
import Filter from "../../components/Filter/Filter";

function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [page, setPage] = useState(1);
  const cardsPerPage = 3;

  useEffect(() => {
    (async () => {
      setUsers(await fetchUsers());
    })();
    (async () => {
      setVisibleUsers(await fetchUsers());
    })();
  }, []);

  const onLoadMoreClick = () => setPage((state) => state + 1);

  const filtration = (e) => {
    switch (e.target.value) {
      case "all":
        setVisibleUsers(users);
        // console.log("all visibleUsers:", visibleUsers);
        break;

      case "follow":
        setVisibleUsers(
          users.filter(
            (user) => !JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
          )
        );
        // console.log("follow visibleUsers:", visibleUsers);
        break;

      case "following":
        setVisibleUsers(
          users.filter((user) =>
            JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
          )
        );
        // console.log("following visibleUsers:", visibleUsers);
        break;

      default:
        console.error("invalid value");
        break;
    }
  };

  return (
    <>
      <h1>Tweets Page</h1>

      <Filter filterHandler={filtration} />

      <ul>
        {visibleUsers.length > 0 &&
          visibleUsers.slice(0, page * cardsPerPage).map((user) => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
      </ul>
      {page * cardsPerPage < visibleUsers.length && (
        <LoadMore clickHandler={onLoadMoreClick} />
      )}
    </>
  );
}

export default TweetsPage;
