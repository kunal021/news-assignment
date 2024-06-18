const getPublishDate = (timeStamp) => {
  const date = new Date(timeStamp);
  const year = date.getUTCFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();

  return `${day} ${month}, ${year}`;
};

export default getPublishDate;
