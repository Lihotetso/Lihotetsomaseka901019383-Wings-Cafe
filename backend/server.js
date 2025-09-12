const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const DATA_PATH = path.join(__dirname, 'data.json');

function readData() {
  if (!fs.existsSync(DATA_PATH)) return { products: [], customers: [], sales: [] };
  return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
}
function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

app.get('/api/products', (req, res) => {
  const data = readData();
  res.json(data.products);
});

app.post('/api/products', (req, res) => {
  const data = readData();
  const product = { ...req.body, id: Date.now() };
  data.products.push(product);
  writeData(data);
  res.status(201).json(product);
});

app.put('/api/products/:id', (req, res) => {
  const data = readData();
  const idx = data.products.findIndex(p => p.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  data.products[idx] = { ...data.products[idx], ...req.body };
  writeData(data);
  res.json(data.products[idx]);
});

app.delete('/api/products/:id', (req, res) => {
  const data = readData();
  data.products = data.products.filter(p => p.id != req.params.id);
  writeData(data);
  res.status(204).end();
});


app.get('/api/customers', (req, res) => {
  const data = readData();
  res.json(data.customers);
});

app.post('/api/customers', (req, res) => {
  const data = readData();
  const customer = { ...req.body, id: Date.now() };
  data.customers.push(customer);
  writeData(data);
  res.status(201).json(customer);
});

app.get('/api/sales', (req, res) => {
  const data = readData();
  res.json(data.sales);
});

app.post('/api/sales', (req, res) => {
  const data = readData();
  const sale = { ...req.body, id: Date.now() };
  data.sales.push(sale);
  writeData(data);
  res.status(201).json(sale);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
