
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
    from: "btkjt6r58",
    select: [12, 13, 14],
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
  

      const phoneValues = data.map(item => item[12].value).filter(value => value);
      document.getElementById("phoneNumber").innerHTML = phoneValues;

      const dccCodeValues = data.map(item => item[13].value).filter(value => value);
      document.getElementById("dccCode").innerHTML = dccCodeValues;

      const termsValues = data.map(item => item[14].value).filter(value => value);
    
      const ol = document.getElementById("termsAndConditions");

      // Loop through the termsValues array and create a new list item for each item
      termsValues.forEach(value => {
        const li = document.createElement("li"); // Create a new list item element
        li.textContent = value; // Set the text content of the list item to the array item
        ol.appendChild(li); // Append the list item to the UL
      });

      console.log(termsValues);

  
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
  
  
  
  