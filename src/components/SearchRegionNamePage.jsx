import { useEffect, useState } from "react";

const SearchRegionName = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRegionNames() {
      try {
        const response = await fetch(
          "https://www.universal-tutorial.com/api/QatMHfnFgEeRG5RB0BQAGh4ezHMwcYBDiYTomQL9c3N6CSl0NcSva0m3ZH1w4ZL247A"
        );
        if (!response.ok) {
          throw new Error("No such place exists!");
        }
        const data = await response.json();
        setName(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchRegionNames();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{name}</div>;
};

export default SearchRegionName;
