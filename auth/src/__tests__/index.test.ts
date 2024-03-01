import request from "supertest";
import  app  from "../app";

it('Responds with a 200 status',async () => {
  await request(app)
    .get( "/")
    .expect(200);
});