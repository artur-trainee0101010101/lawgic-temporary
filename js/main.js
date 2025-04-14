function handleSubmit() {
  const email = document.getElementById("emailInput")?.value;
  if (!email) {
    alert("Please enter your email.");
    return;
  }
  alert(`Thank you! We'll be in touch at ${email}`);
}