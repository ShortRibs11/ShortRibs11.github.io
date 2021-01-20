
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "contactjake@hotmail.com",
    Password: "",
    To: "contactjake@hotmail.com",
    From: "contactjake@hotmail.com",
    Subject: "RE: Contact from Website",
    Body: document.forms[0].comments.value + "\n" +
          document.forms[0].firstName.value + " " +
          document.forms[0].lastName.value + "\n" +
          document.forms[0].emailAddress.value,
  });
}
