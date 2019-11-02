$("#inputDate").on("input", () => {
  CopyDateToClipboard();
});

$(() => {
  $("#dateFormat").change(() => {
    CopyDateToClipboard();
  });
})

// Format Date and Copy it to Clipboard
function CopyDateToClipboard() {
  // Get date and format
  const strDate = $("#inputDate").val();
  const format = $("#dateFormat").val();

  // Format date and display
  $("#displayDate").val(FormatDate(strDate, format));
  if (navigator.clipboard) {
    navigator.clipboard.writeText($("#displayDate").val());
  }
}

function FormatDate(date, format) {
  moment.locale("ja");
  var momDate = moment(date);
  return momDate.format(format);
}