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
      .send({ username: process.env.USERNAME, password: process.env.TEST_PASSWORD });
    expect(loginResponse.status).toBe(200);

    const userResponse = await agent.get('/api/user/');
    expect(userResponse.status).toBe(200);
    expect(userResponse.body.username).toBe('korchard');
  });
});
