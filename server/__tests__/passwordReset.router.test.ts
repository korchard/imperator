import app from '../server';
import testServer from 'supertest';

describe('Test our passwordReset route', () => {
  test('/reset should return the user name and email', async () => {
    // agent helps tie multiple requests to the same server/session
    const agent = testServer.agent(app);
    // Must login first
    const loginResponse = await agent
      .post('/api/user/login')
      .send({
        username: process.env.TEST_USER,
        password: process.env.TEST_PASSWORD,
      });
    expect(loginResponse.status).toBe(200);

    const userResponse = await agent.get('/api/user/');
    expect(userResponse.status).toBe(200);

    const resetResponse = await agent.post('/api/reset').send({
      email: process.env.TEST_EMAIL,
      confirm: process.env.TEST_EMAIL,
    });
    expect(resetResponse.body.email).toBe(process.env.TEST_EMAIL);
  });
});
