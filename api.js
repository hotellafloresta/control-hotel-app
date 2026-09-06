window.ControlHotelAPI = {

  async dashboard(from, to) {
    const url =
      `${window.CONTROL_HOTEL_CONFIG.API_URL}/api/dashboard?from=${from}&to=${to}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error consultando dashboard: ${response.status}`);
    }

    return await response.json();
  },

  async health() {
    const response = await fetch(
      window.CONTROL_HOTEL_CONFIG.API_URL
    );

    return await response.json();
  }

};
