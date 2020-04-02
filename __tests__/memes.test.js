const { getMemes, getMeme } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');


describe('meme routes', () => {
  it('posts a meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'test top',
        image: 'test image',
        bottom: 'test bottom'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'test top',
          image: 'test image',
          bottom: 'test bottom',
          __v: 0
        });
      });
  });



  
});
