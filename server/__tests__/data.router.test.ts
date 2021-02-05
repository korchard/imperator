import app from '../server';
import testServer from 'supertest';

describe('Test our data routes', () => {
  test('/totalactions should return hashtags, insights, notes and projects with a count', async () => {
    // agent helps tie multiple requests to the same server/session
    const agent = testServer.agent(app);
    // Must login first
    const loginResponse = await agent
      .post('/api/user/login')
      .send({ username: 'james', password: process.env.TEST_PASSWORD });
    expect(loginResponse.status).toBe(200);

    const userResponse = await agent.get('/api/user/');
    expect(userResponse.status).toBe(200);

    const dataResponse = await testServer(app).get('/api/data/totalactions');
    expect(dataResponse.body[0].hashtags.count).toBeGreaterThanOrEqual(1);
    expect(dataResponse.body[0].insights.count).toBeGreaterThanOrEqual(1);
    expect(dataResponse.body[0].notes.count).toBeGreaterThanOrEqual(1);
    expect(dataResponse.body[0].projects.count).toBeGreaterThanOrEqual(1);
  });

  test('/api/data/user-over-time should return users added monthly', async () => {
    // agent helps tie multiple requests to the same server/session
    const agent = testServer.agent(app);
    // Must login first
    const loginResponse = await agent
      .post('/api/user/login')
      .send({ username: 'korchard', password: process.env.TEST_PASSWORD });
    expect(loginResponse.status).toBe(200);

    const userResponse = await agent.get('/api/user/');
    expect(userResponse.status).toBe(200);

    const dataResponse = await testServer(app).get('/api/data/user-over-time');
    expect(dataResponse.body[0].countDocuments).toEqual(12);
  });
});
