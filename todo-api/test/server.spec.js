const app = require('../app');
const request = require('request');
// var http = require('http');
const mongoose = require('../libs/mongoose');
const chai = require('chai');

const assert = chai.assert;


describe('server tests', () => {
  let server;// = http.createServer(app);
  before(done => {
    console.info('before test::')
    server = app.listen(3000, done);
  });

  after(done => {
    console.info('after test::')
    server.on('close', () => {
      console.log('server close')
      mongoose.connection.close();
    })
    server.close(done);
  });

  describe('GET', () => {
      it('should return index string', done => {
        request('http://localhost:3000', function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log('body:', body); // Print the HTML for the Google homepage.

          done();
        });
      })

    it('should not send todos to unanotorized users', done => {
      request(
        {
          method: "GET",
          uri: 'http://localhost:3000/api/todos'
        },
        function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log('body:', body); // Print the HTML for the Google homepage.
          assert.equal(response.statusCode, 401)
          assert.equal(body, "Unauthorized")
          done();
      });
    })

    it('should be able to login with correct credentials', done => {
      request(
        {
          method: "post",
          uri: 'http://localhost:3000/login',
          json: true,
          body: {
            // mimeType: 'application/x-www-form-urlencoded',
            email: 'example1@home.ru',
            password: '123456'
          }
        },
        function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log('body:', body); // Print the HTML for the Google homepage.
          assert.equal(response.statusCode, 200)
          assert.exists(body.token)
          done();
        });
    })

    it('should not be able to login with incorrect credentials', done => {
      request(
        {
          method: "post",
          uri: 'http://localhost:3000/login',
          json: true,
          body: {
            // mimeType: 'application/x-www-form-urlencoded',
            email: 'NOTexample1@home.ru',
            password: '123456'
          }
        },
        function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log('body:', body); // Print the HTML for the Google homepage.
          assert.equal(response.statusCode, 404);
          assert.notExists(body.token);
          done();
        });
    });

    it('should send todos to autorised users', done => {
      request(
        {
          method: "post",
          uri: 'http://localhost:3000/login',
          json: true,
          body: {
            // mimeType: 'application/x-www-form-urlencoded',
            email: 'example1@home.ru',
            password: '123456'
          }
        },
        function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log('body:', body); // Print the HTML for the Google homepage.

          const token = body.token;

          request(
            {
              method: "GET",
              uri: 'http://localhost:3000/api/todos',
              headers: {
                'Authorization': token
              }
            },
            function (error, response, body) {
              console.log('error:', error); // Print the error if one occurred
              console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
              console.log('body:', body); // Print the HTML for the Google homepage.
              assert.equal(response.statusCode, 200);
              assert.exists(JSON.parse(body).data);
              done();
            });
        });
    })

  })

})