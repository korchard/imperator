import app from '../server';
import testServer from 'supertest';

test('/email-company should return 201', async () => {
  const response = await testServer(app).get('/api/email');
  //nodemailer call after that done send back email successfully
  expect(response.body).toBe('email successfully');
});
