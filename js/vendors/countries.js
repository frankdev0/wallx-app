// countries.js
const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
      return countries.map(country => country.name.common);
    } catch (error) {
      console.log('Error fetching countries:', error);
      return [];
    }
  };
  