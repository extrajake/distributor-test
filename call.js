// // Make the API call
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);

// const id = urlParams.get("id");
// var data = localStorage.getItem("data");
// var headers = {
//   "QB-Realm-Hostname": "jakelacouvee.quickbase.com",
//   Authorization: "QB-USER-TOKEN b7kbbw_qsqq_0_b9ykyiacmnx3bbj6z9gjqmupkr",
//   "Content-Type": "application/json"
// };
// var body = {
//   from: "btkjt6r8g",
//   select: [ 1, 2, 3, 4, 5, 9, 10],
//   where: "{42.EX.'" + id + "'}"
// };

// const xmlHttp = new XMLHttpRequest();

// xmlHttp.open('GET', 'https://api.quickbase.com/v1/fields/10?tableId=btkjt6r8g', true);

// for (const key in headers) {
//     xmlHttp.setRequestHeader(key, headers[key]);
// }

// xmlHttp.onreadystatechange = function() {
//     if (xmlHttp.readyState === XMLHttpRequest.DONE) {
//         const response = JSON.parse(xmlHttp.response);
//         if (response.data) {
//             var item = response.data[0];
//             console.log(item);

//             var phoneNumber = (item[9].value) ? item[9].value : "";
//             var dccCode = (item[10].value) ? item[10].value : "";
//             document.getElementById("phoneNumber").innerHTML = phoneNumber;
//             document.getElementById("dccCode").innerHTML = dccCode;
//         }
//     }


// }
// xmlHttp.send(JSON.stringify(body));

// Make the API call


var headers = {
  'QB-Realm-Hostname': 'jakelacouvee.quickbase.com',
'User-Agent': '{User-Agent}',
'Authorization': 'QB-USER-TOKEN b7kbbw_qsqq_0_b9ykyiacmnx3bbj6z9gjqmupkr',
  'Content-Type': 'application/json'
}

// var body = {
//   from: "btkjt6r8g",
//   select: [9, 10],
//   where: "{42.EX.'" + id + "'}"
// };


const xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', 'https://api.quickbase.com/v1/fields/10?tableId=btkjt6r8g', true);
for (const key in headers) {
xmlHttp.setRequestHeader(key, headers[key]);
}
xmlHttp.onreadystatechange = function() {
if (xmlHttp.readyState === XMLHttpRequest.DONE) {
  const responseObj = JSON.parse(xmlHttp.response);

  if (responseObj.data) {
                var item = response.data[0];
                console.log(item);
    
                var phoneNumber = (item[9].value) ? item[9].value : "";
                var dccCode = (item[10].value) ? item[10].value : "";
                document.getElementById("phoneNumber").innerHTML = phoneNumber;
                document.getElementById("dccCode").innerHTML = dccCode;
            }

  console.log(responseObj);
      
      // Now you can work with the responseObj as a JavaScript object
  
  }
};

xmlHttp.send();

