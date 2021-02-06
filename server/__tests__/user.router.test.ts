import app from '../server';
import testServer from 'supertest';

describe('Test our user routes', () => {
  test('/logout should return status 200', async () => {
    const response = await testServer(app).post('/api/user/logout');
    expect(response.status).toBe(200);
  });

  test('/user should return status 403 if not logged in', async () => {
    const response = await testServer(app).get('/api/user/');
    expect(response.status).toBe(403);
  });

  test('/user should return the user if logged in', async () => {
    // agent helps tie multiple requests to the same server/session
    const agent = testServer.agent(app);

    // Must login first
    const loginResponse = await agent
      .post('/api/user/login')
<<<<<<< HEAD
      .send({ username: process.env.USERNAME, password: process.env.TEST_PASSWORD });
=======
      .send({
        username: process.env.TEST_USER,
        password: process.env.TEST_PASSWORD,
      });
>>>>>>> d79488df944bcf1a063f0f4a01ffe14c8c82d5ca
    expect(loginResponse.status).toBe(200);

    const userResponse = await agent.get('/api/user/');
    expect(userResponse.status).toBe(200);
<<<<<<< HEAD
    expect(userResponse.body.username).toBe('korchard');
=======
    expect(userResponse.body.username).toBe(process.env.TEST_USER);
>>>>>>> d79488df944bcf1a063f0f4a01ffe14c8c82d5ca
  });
});
