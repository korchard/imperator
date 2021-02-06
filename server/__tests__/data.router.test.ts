import app from '../server';
import testServer from 'supertest';

describe('Test our data routes', () => {
  test('/totalactions should return hashtags, insights, notes and projects with a count', async () => {
    // agent helps tie multiple requests to the same server/session
    const agent = testServer.agent(app);
    // Must login first
    const loginResponse = await agent
      .post('/api/user/login')
      .send({ username: process.env.TEST_USER, password: process.env.TEST_PASSWORD });
    expect(loginResponse.status).toBe(200);

    const userResponse = await agent.get('/api/user/');
    expect(userResponse.status).toBe(200);

    const dataResponse = await testServer(app).get('/api/data/totalactions');
    expect(dataResponse.body.hashtags.count).toBeGreaterThanOrEqual(1);
    expect(dataResponse.body.insights.count).toBeGreaterThanOrEqual(1);
    expect(dataResponse.body.notes.count).toBeGreaterThanOrEqual(1);
    expect(dataResponse.body.projects.count).toBeGreaterThanOrEqual(1);
  });
});
