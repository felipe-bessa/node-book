'use strict'

const request = require('supertest');
const app = require('../../../src/app');

describe('Routes: Products', () => {
    const defaultProduct = {
        name: 'Default product',
        description: 'product description',
        price: 100
    };

    describe('GET /products', () => {
        it('should return 200 and a list of products', async () => {
            const response = await request(app).get('/products');
            expect(response.statusCode).toBe(200);
        });

        it('should return a list of products', async () => {
            const response = await request(app).get('/products');
            expect(response.body[0]).toMatchObject(defaultProduct);
        });
    });
});