import { rest } from "msw";
import apiMock from "../apiMock";

const apiUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/users/register`, (request, response, context) => {
    return response(context.status(201), context.json({ user: apiMock }));
  }),

  rest.post(`${apiUrl}/users/login`, (request, response, context) => {
    return response(context.status(200), context.json({ user: apiMock }));
  }),
];
