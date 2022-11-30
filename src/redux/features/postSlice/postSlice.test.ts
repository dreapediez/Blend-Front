import { listOfPostsMock, postMock } from "../../../mocks/listOfPostsMock";
import {
  loadAllPostsActionCreator,
  loadOnePostActionCreator,
  postInitialState,
  postReducer,
} from "./postSlice";

describe("Given a postReducer", () => {
  describe("When it receives the initial state and an unknown action", () => {
    test("Then it should return a copy of the intial state", () => {
      const unknownAction = {
        type: "unknown",
      };

      const newState = postReducer(postInitialState, unknownAction);

      expect(newState).toStrictEqual(postInitialState);
    });
  });

  describe("And its reducer loadAllPosts is invoked", () => {
    describe("When it receives an initial state and a loadAllPosts action with a list of posts in its payload", () => {
      test("Then it should return a new state with the posts received", () => {
        const loadPostListAction = loadAllPostsActionCreator(listOfPostsMock);

        const currentPostState = {
          list: [],
        };
        const expectedPostState = {
          list: listOfPostsMock,
        };

        const newPostState = postReducer(currentPostState, loadPostListAction);

        expect(newPostState).toStrictEqual(expectedPostState);
      });
    });
  });

  describe("And its reducer loadOnePost is invoked", () => {
    describe("When it receives an initial state and a loadOnePost action with one post in its payload", () => {
      test("Then it should return a new state with the post received", () => {
        const loadPostAction = loadOnePostActionCreator(postMock);

        const currentPostState = {
          list: [],
        };

        const expectedPostState = {
          list: [postMock],
        };

        const newPostState = postReducer(currentPostState, loadPostAction);

        expect(newPostState).toStrictEqual(expectedPostState);
      });
    });
  });
});
