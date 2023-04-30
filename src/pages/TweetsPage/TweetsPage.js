import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api/usersApi";
import useWindowDimensions from "../../services/hooks/useWindowDimensions";
import TweetCard from "../../components/TweetCard/TweetCard";
import LoadMore from "../../components/LoadMore/LoadMore";
import Filter from "../../components/Filter/Filter";
import { List, Section } from "./TweetsPage.styled";

function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [page, setPage] = useState(1);
  const { width } = useWindowDimensions();

  const cardsPerPage = (width >= 904 && width < 1332) || width >= 1760 ? 4 : 3;

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
        break;

      case "follow":
        setVisibleUsers(
          users.filter(
            (user) => !JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
          )
        );
        break;

      case "following":
        setVisibleUsers(
          users.filter((user) =>
            JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
          )
        );
        break;

      default:
        console.error("invalid value");
        break;
    }
  };

  return (
    <Section>
      <Filter filterHandler={filtration} />
      <List>
        {visibleUsers.length > 0 &&
          visibleUsers.slice(0, page * cardsPerPage).map((user) => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
      </List>
      {page * cardsPerPage < visibleUsers.length && (
        <LoadMore clickHandler={onLoadMoreClick} />
      )}
    </Section>
  );
}

export default TweetsPage;
