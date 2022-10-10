export interface IComments {
  comment: string;
  desc: string;
  date: string;
  isDone: boolean;
}

export interface ICreateCommentRequest {
  comment: string;
  desc: string;
}
