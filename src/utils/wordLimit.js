function truncateData(data, wordLimit) {
  const words = data.split(" ");
  if (words.length <= wordLimit) {
    return data;
  }

  return words.slice(0, wordLimit).join(" ") + "...";
}

export default truncateData;
