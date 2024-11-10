const express = require('express');
const router = express.Router();

// Mock service data (can be replaced with actual database queries)
const services = [
  { title: 'Grooming', description: 'Professional grooming services.' },
  { title: 'Dog Walking', description: 'Regular walks for healthy pets.' },
  { title: 'Pet Sitting', description: 'Reliable sitting services when you’re away.' },
  { title: 'Training', description: 'Expert training for pets.' },
  { title: 'Veterinary Care', description: 'Comprehensive care for your pets.' },
  { title: 'Boarding', description: 'Comfortable boarding for your pets.' },
];

// Route to fetch services
router.get('/services', (req, res) => {
  res.json(services);
});

module.exports = router;
