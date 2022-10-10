import { IComments, ICreateCommentRequest } from "../models/models";

export const createCommentRequest = (
  comment: ICreateCommentRequest
): IComments => {
  return { ...comment, date: Date.now().toString(), isDone: false };
};
