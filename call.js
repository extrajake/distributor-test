// Replace 'YOUR_API_KEY' with your actual HubSpot API key
const apiKey = 'pat-na1-70302af9-f0f7-4814-96cd-f3648b8f4eca';

// Define the HubSpot API endpoint for companies
const endpoint = 'https://api.hubapi.com/companies/v2/companies/paged';

// Define a function to fetch companies
async function fetchCompanies() {
  try {
    const response = await fetch(`${endpoint}?hapikey=${apiKey}`);
    const data = await response.json();
    
    // Process and display the list of companies
    const companies = data.companies;
    companies.forEach(company => {
      console.log(company.name);
    });
  } catch (error) {
    console.error('Error fetching companies:', error);
  }
}

// Call the fetchCompanies function to retrieve and display companies
fetchCompanies();
