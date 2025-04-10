import { useEffect, useState } from "react";
import axios from "axios";

const GithubAPI = () => {
  const [url, setUrl] = useState("Riyannayak");
  const [name, setName] = useState("");
  const [follower, setFollower] = useState(0);
  const [repoCount, setRepoCount] = useState(0);
  const [image, setImage] = useState("");
  const fetchData = () => {
    const response = axios.get(`https://api.github.com/users/${url}`);
    response.then((result) => {
      setImage(result.data.avatar_url);
      setName(result.data.name);
      setFollower(result.data.followers);
      setRepoCount(result.data.public_repos);
    });
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return (
    <div className="mx-auto my-3 w-[800px] flex bg-gray-200 h-[80vh] p-5 rounded-lg">
      <div className="image h-full w-[400px] border">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="data flex flex-col justify-center items-center w-full h-full gap-10 border">
        <h1>{name}</h1>
        <h2>{`follower : ${follower}`}</h2>
        <h2>{`Repo Count : ${repoCount}`}</h2>
        <div>
          <button
            onClick={() => {
              setUrl("bikashgiri2002");
            }}
          >
            Bikash
          </button>
          <button
            onClick={() => {
              setUrl("Riyannayak");
            }}
          >
            Riyan
          </button>
        </div>
      </div>
    </div>
  );
};

export default GithubAPI;
