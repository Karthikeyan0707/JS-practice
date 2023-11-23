localStorage.setItem("Name", "Bob");
console.log(localStorage.getItem("Name"));
// localStorage.removeItem("Name");

sessionStorage.setItem("Name", "John");
sessionStorage.setItem("Name", "Michael");
console.log(sessionStorage.getItem("Name"));
// sessionStorage.removeItem("Name");

document.cookie = "Name=Kyle; expires= " + new Date(2025, 1, 1).toUTCString();
console.log(document.cookie);
document.cookie =
  "LastName=Smith; expires= " + new Date(2025, 1, 1).toUTCString();
