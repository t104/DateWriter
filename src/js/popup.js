const getInputDate = () => document.getElementById("inputDate");
const getDateFormat = () => document.getElementById("dateFormat");
const getDisplayDate = () => document.getElementById("displayDate");

const formatDate = (date, format) => {
  moment.locale("ja");
  const momDate = moment(date);
  return momDate.format(format);
};

// Format Date and Copy it to Clipboard
const onUpdate = () => {
  const inputDate = getInputDate().value;
  const dateFormat = getDateFormat().value;
  const formattedDate = formatDate(inputDate, dateFormat);
  getDisplayDate().value = formattedDate;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(formattedDate);
  }
};

// Add Event Listener
getInputDate().addEventListener("input", onUpdate);
getDateFormat().addEventListener("input", onUpdate);
