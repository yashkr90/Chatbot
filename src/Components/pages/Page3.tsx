
import { useSelector } from "react-redux";

const Page3 = () => {


  function capitalizeWords(sentence:string) {
    const words = sentence.split(" ");

    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });

    const capitalizedSentence = capitalizedWords.join(" ");

    return capitalizedSentence;
  }

  const reduxData = useSelector((state:any) => state.user);
  console.log("reduxData: ", reduxData);
  const username=capitalizeWords(reduxData.username);
  return (
    <div>
      {`Your name ${username} aged ${reduxData.age} has been added to student system. You may now exit.`}
    </div>
  );
};

export default Page3;
