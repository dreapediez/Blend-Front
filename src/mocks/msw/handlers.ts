import { rest } from "msw";
import apiMock from "../apiMock";
import { listOfPostsMock, postMock } from "../listOfPostsMock";

const apiUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/users/register`, (request, response, context) => {
    return response(context.status(201), context.json({ user: apiMock }));
  }),

  rest.post(`${apiUrl}/users/login`, (request, response, context) => {
    return response(context.status(200), context.json({ user: apiMock }));
  }),

  rest.get(`${apiUrl}/posts`, (request, response, context) => {
    return response(
      context.status(200),
      context.json({ posts: listOfPostsMock })
    );
  }),

  rest.get(
    `${apiUrl}/posts/post/638b38336f2e824ae4cd3a03`,
    (request, response, context) => {
      return response(context.status(200), context.json(postMock));
    }
  ),

  rest.delete(
    `${apiUrl}/posts/delete/638b38336f2e824ae4cd3a03`,
    (request, response, context) => {
      return response(context.status(200), context.json(postMock));
    }
  ),

  rest.post(`${apiUrl}/posts/create`, (request, response, context) => {
    return response(context.status(200));
  }),
];
