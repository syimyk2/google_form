export function ResizeTextBox(elm) {
  var rowcount = $(elm).attr("rows");
  var textareaRows = $(elm).val().split("\n");
  if (textareaRows[0] != "undefined" && textareaRows.length < rowcount - 1) {
    counter = rowcount;
  } else {
    counter = textareaRows.length + 1;
  }
  $(elm).attr("rows", counter);
}
