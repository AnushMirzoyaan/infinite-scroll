import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [fetchOnce, setFetchOnce] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    const data = await fetch(
      `https://random-data-api.com/api/v2/users?size=30&page=${page}`
    );
    const result = await data.json();
    setUsers((prevUsers) => [...prevUsers, ...result]);
    setIsLoading(false);
  }
console.log(users)
  const handleScroll = () => {
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (!isLoading && scrolled + viewportHeight >= fullHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (!fetchOnce) {
      getData();
    }
  }, [page,fetchOnce]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  return (
    <div className="App">
      {users.map((user, index) => (
        <Card key={user.uid} user={user} />
      ))}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
