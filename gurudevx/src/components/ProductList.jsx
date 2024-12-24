import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

function ProductList({ products }) {
  return (
    <Grid container spacing={3} style={{ padding: '20px' }}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.category}
              </Typography>
              <Typography variant="h6" color="primary">
                ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
