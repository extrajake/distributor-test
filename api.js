
var headers = {
  'QB-Realm-Hostname': 'jakelacouvee.quickbase.com',
'User-Agent': '{User-Agent}',
'Authorization': 'QB-USER-TOKEN b7kbbw_qsqq_0_b9ykyiacmnx3bbj6z9gjqmupkr',
  'Content-Type': 'application/json'
}

var headers = {
  'QB-Realm-Hostname': 'jakelacouvee.quickbase.com',
'User-Agent': '{User-Agent}',
'Authorization': 'QB-USER-TOKEN b7kbbw_qsqq_0_b9ykyiacmnx3bbj6z9gjqmupkr',
  'Content-Type': 'application/json'
}
var body = {
  from: "btkjt6r2v",
  select: [1, 2, 3, 4, 5, 6, 9, 10, 13, 20],
  sortBy: [{ order: "ASC" }],
  options: { skip: 0, top: 0, compareWithAppLocalTime: false }
}

fetch('https://api.quickbase.com/v1/records/query',
{
  method: 'POST',
  headers: headers,
  body: JSON.stringify(body)
})
.then(res => {
if (res.ok) {
  return res.json().then(res => {
    // Access the data array from the response
    const data = res.data;
    console.log(data[0]);

    document.getElementById("phoneNumber").innerHTML = data[0][13].value;
    document.getElementById("dccCode").innerHTML = data[0][6].value;

    // Create an unordered list (UL)
    // const ul = document.createElement("ul");

    // // Loop through the data array and create list items (LI)
    // data.forEach(item => {
    //   const li = document.createElement("li");
    //   li.textContent = JSON.stringify(item); // Display the item as JSON string, you can format it as needed
    //   ul.appendChild(li);
    // });

    // // Append the unordered list to the "data-list" element
    // dataList.appendChild(ul);
  });
} else {
  return res.json().then(resBody => Promise.reject({ status: res.status, ...resBody }));
}
})
.catch(err => console.log(err));



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
    window.location.href = '/promo-redirect-1.html'
  } else if (codes2.includes(url)) {
    window.location.href = '/promo-redirect-2.html'
  } else if (codes3.includes(url)) {
    window.location.href = '/promo-redirect-3.html'
  } else if (codes4.includes(url)) {
    window.location.href = '/promo4.html'
  } else if (codes5.includes(url)) {
    window.location.href = '/promo5.html'
  } else {
    alert('This code is invalid.')
  }
  
  // Redirect to the new page
});