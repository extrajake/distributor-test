
document.getElementById('codeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the value from the input field
  var url = document.getElementById('inputField').value;

  const codes = ["1NKCI", "V3L7R", "60HPC", "8SF6L", "AHG08"];
  const codes2 = ["2WEMV", "KWWNI", "XNB7X", "6BN2T", "Y2FOK"];
  const codes3 = ["YJYZL", "6HNP2", "V9FF8", "8SF5L", "5B23I"];
  const codes4 = ["UVUNU", "1N5UL", "IINVK", "AEZNP", "HM2NM"];
  const codes5 = ["KGFIA", "XI28K", "2QQ8K", "9Y4HK", "DMQJT"];

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