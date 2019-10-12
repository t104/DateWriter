$("#inputDate").on("input", () => {
  // Get date and format
  var strDate = $("#inputDate").val();
  var format = $("#dateFormat").val();

  // Format date and display
  $("#displayDate").val(FormatDate(strDate, format));

  // Copy to clipboard on input date changed
  CopyDateToClipboard();
  });

$("#btn").on("click", () => 
{
  CopyDateToClipboard();
})

function CopyDateToClipboard(){
  if(navigator.clipboard){
    navigator.clipboard.writeText($("#displayDate").val());
  }
}

function FormatDate(date, format){
  moment.locale("ja");
  var momDate = moment(date);
  return momDate.format(format);
}