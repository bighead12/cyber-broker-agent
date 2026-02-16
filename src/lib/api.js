const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://ugly-donna-chenfeis-1e1e5015.koyeb.app/api/properties';
const API_KEY = import.meta.env.VITE_API_KEY || 'cyber-broker-secret-key-2024';

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': API_KEY,
};

export const api = {
  async getAll() {
    const response = await fetch(API_BASE_URL, { headers });
    if (!response.ok) throw new Error('Failed to fetch properties');
    return response.json();
  },

  async getById(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`, { headers });
    if (!response.ok) throw new Error('Failed to fetch property');
    return response.json();
  },

  async create(property) {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(property),
    });
    if (!response.ok) throw new Error('Failed to create property');
    return response.json();
  },

  async update(id, updates) {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update property');
    return response.json();
  },

  async delete(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
      headers,
    });
    if (!response.ok) throw new Error('Failed to delete property');
    return response.json();
  },
};
