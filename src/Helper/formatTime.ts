const formatVNDateTime = (date: Date): string => {
  const day = date.getDay() < 10 ? `0${date.getDay()}` :  date.getDay();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` :  date.getMonth();
  const year = date.getFullYear();
  return `ngày ${day} tháng ${month} năm ${year}`;
}

export { formatVNDateTime };