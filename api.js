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
  },

  async crearMovimiento(movimiento) {
    const response = await fetch(
      `${window.CONTROL_HOTEL_CONFIG.API_URL}/api/movimientos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(movimiento)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || `Error registrando movimiento: ${response.status}`
      );
    }

    return data;
  }
};
