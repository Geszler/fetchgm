import './style.css';
import { Product } from './counter';

document.addEventListener('DOMContentLoaded', () => {
  async function getData() {
    const url = "https://retoolapi.dev/VI2TUL/data";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      displayProducts(json); 
    } catch (error) {
      console.error(error.message);
    }
  }

  function displayProducts(products: Product[]) { 
    let tableHTML = `
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Rating</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
    `;

  
    products.forEach(product => {
      tableHTML += `
        <tr key="${product.id}">
          <td>${product.id}</td>
          <td>${product.rating}</td>
          <td>${product.status}</td>
        </tr>
      `;
    });

    tableHTML += `
        </tbody>
      </table>
    `;

    
    const container = document.getElementById('product-table-container'); 
    if (container) {
      container.innerHTML = tableHTML; 
    }
  }

  getData(); 
});
