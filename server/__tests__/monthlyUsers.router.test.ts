import app from '../server';
import testServer from 'supertest';

describe('Test our monthlyUser route', () => {
  test('/api/userOverTime should return users added monthly', async () => {
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

    const dataResponse = await testServer(app).get('/api/userOverTime');
		expect(dataResponse.body.length).toEqual(12);
  });
});
