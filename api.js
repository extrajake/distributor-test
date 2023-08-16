
document.getElementById('codeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the value from the input field
  var url = document.getElementById('inputField').value;

  const codes = ["DCC1000"];
  const codes2 = ["DCC2000"];
  const codes3 = ["DCC3000"];
  const codes4 = ["DCC4000"];
  const codes5 = ["DCC5000"];


  if (codes.includes(url)) {
    window.location.href = '/promo1.html'
  } else if (codes2.includes(url)) {
    window.location.href = '/promo2.html'
  } else if (codes3.includes(url)) {
    window.location.href = '/promo3.html'
  } else if (codes4.includes(url)) {
    window.location.href = '/promo4.html'
  } else if (codes5.includes(url)) {
    window.location.href = '/promo5.html'
  } else {
    alert('This code is invalid.')
  }
  
  // Redirect to the new page
});