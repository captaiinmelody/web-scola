const boldWords = (text: string, words: string[]): JSX.Element => {
  let newText: (string | JSX.Element)[] = [text];
  words.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    newText = newText.flatMap((part, index) =>
      typeof part === "string"
        ? part
            .split(regex)
            .map((splitPart, splitIndex) =>
              regex.test(splitPart) ? (
                <strong key={`${index}-${splitIndex}`}>{splitPart}</strong>
              ) : (
                splitPart
              )
            )
        : part
    );
  });
  return <>{newText}</>;
};

export default boldWords;
