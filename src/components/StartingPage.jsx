import { useState, useEffect } from "react";
import classes from "./StartingPage.module.css";
// import { useSelector } from "react-redux/es/hooks/useSelector";

const StartingPage = () => {
  const date = new Date();
  const hours = date.getHours();
  // const appClassName = useSelector((state) => state.appClassName);

  const [greetings, setGreetings] = useState("");

  useEffect(() => {
    if (hours >= 4 && hours < 12) {
      setGreetings("Good Morning Master");
    } else if (hours >= 12 && hours < 18) {
      setGreetings("Good Afternoon Master");
    } else {
      setGreetings("Good Evening Master");
    }
  }, [hours]);

  return (
    <>
      <div>
        <main>
          <p className={classes.start}>{greetings}</p>
        </main>
      </div>
    </>
  );
};

export default StartingPage;
