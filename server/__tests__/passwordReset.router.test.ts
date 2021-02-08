import app from '../server';
import testServer from 'supertest';

describe('Test our passwordReset route', () => {
    test('/reset should return the user name and email', async () => {
        // agent helps tie multiple requests to the same server/session
        const agent = testServer.agent(app);
    
        // Must login first
        const resetResponse = await agent
          .post('/api/reset')
          .send({
            email: process.env.TEST_EMAIL,
            confirm: process.env.TEST_CONFIRM,
          });
        expect(resetResponse.body.email).toBe(process.env.TEST_EMAIL);
    });
});