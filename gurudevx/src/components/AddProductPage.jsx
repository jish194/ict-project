import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useState } from 'react';

function AddProductPage() {
  const [form, setForm] = useState({
    name: '',
    image: null,
    price: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: name === 'image' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          name="name"
          label="Product Name"
          variant="outlined"
          fullWidth
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          name="image"
          type="file"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <TextField
          name="price"
          label="Price"
          variant="outlined"
          fullWidth
          value={form.price}
          onChange={handleChange}
        />
        <TextField
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          value={form.category}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </Box>
    </Container>
  );
}

export default AddProductPage;
