const API_BASE_URL = 'http://localhost:8000/api/properties';

export const api = {
  async getAll() {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch properties');
    return response.json();
  },

  async getById(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Failed to fetch property');
    return response.json();
  },

  async create(property) {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(property),
    });
    if (!response.ok) throw new Error('Failed to create property');
    return response.json();
  },

  async update(id, updates) {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update property');
    return response.json();
  },

  async delete(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete property');
    return response.json();
  },
};
