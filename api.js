
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
    return res.json().then(responseData => {
      // Access the data array from the response
      const data = responseData.data;

      // Extract the field values into an array
      const fieldValues = data.map(item => item[6].value).filter(value => value); // Assuming field 6 contains the values
      console.log(fieldValues);

      document.getElementById('codeForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the value from the input field
        var url = document.getElementById('inputField').value;
        var dcc = ('dcc');

        if (fieldValues.includes(parseInt(url))) {
          window.location.href = '/promo-redirect-1.html';
        } else {
          alert('This code is invalid.');
        }
      });
    });
  }
})

// .then(res => {
// if (res.ok) {
//   return res.json().then(res => {
//     // Access the data array from the response
//     const data = res.data;
//     data.forEach(item => {
//       const fieldValue = item[6].value;
//       if (fieldValue) {
//         console.log(fieldValue);
//         //fieldValue is equal to all codes from table as an array
//       }
//       document.getElementById('codeForm').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission
        
//         // Get the value from the input field
//         var url = document.getElementById('inputField').value;

//         if (fieldValue.includes(url)) {
//           window.location.href = '/promo-redirect-1.html'
//         } else {
//           alert('This code is invalid.');
//         }
//       });
//     })
    // console.log(data);

//     document.getElementById("phoneNumber").innerHTML = data[0][13].value;
//     document.getElementById("dccCode").innerHTML = data[0][6].value;
//     document.getElementById("codes").innerHTML = fieldValue;

//   });
// } else {
//   return res.json().then(resBody => Promise.reject({ status: res.status, ...resBody }));
// }
// })
// .catch(err => console.log(err));



// document.getElementById('codeForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission
  
//   // Get the value from the input field
//   var url = document.getElementById('inputField').value;

//   const codes = ["DCC1000"];
//   const codes2 = ["DCC2000"];
//   const codes3 = ["DCC3000"];
//   const codes4 = ["DCC4000"];
//   const codes5 = ["DCC5000"];


//   if (codes.includes(url)) {
//     window.location.href = '/promo-redirect-1.html'
//   } else if (codes2.includes(url)) {
//     window.location.href = '/promo-redirect-2.html'
//   } else if (codes3.includes(url)) {
//     window.location.href = '/promo-redirect-3.html'
//   } else if (codes4.includes(url)) {
//     window.location.href = '/promo4.html'
//   } else if (codes5.includes(url)) {
//     window.location.href = '/promo5.html'
//   } else {
//     alert('This code is invalid.')
//   }
  
//   // Redirect to the new page
// });