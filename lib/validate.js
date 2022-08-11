export function validateEmail(mailID) {
  let error = "";
  var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s\d@\"]{2,})$/i;
  if (!pattern.test(String(mailID).toLowerCase())) {
    error = "Please enter valid email address.";
  }
  return error;
}
