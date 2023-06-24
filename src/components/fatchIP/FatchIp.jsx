
export async function fetchIpAddress() {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      const ipAddress = response.data.ip;
      return ipAddress;
    } catch (error) {
      console.error('Error:', error);
    }
  }
