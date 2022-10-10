import db from "../../config/firestore-config";
import createRestuflFunction from "../../utils/helpers";
import { createCommentRequest } from "../helpers/helpers";
import { ICreateCommentRequest } from "../models/models";
import { MethodEnum } from "../../utils/helpers";

const createComment = createRestuflFunction({
  method:MethodEnum.POST,
  callback: async (req, res) => {
    try {
      const body: ICreateCommentRequest = req.body;

      const comment = createCommentRequest({
        comment: body.comment,
        desc: body.desc,
      });

      const ref = await db.collection("comments").add(comment);
      const doc = await ref.get();

      res.status(200).json({
        message: "Comment created",
        data: {
          id: doc.id,
          comment: doc.data(),
        },
      });
    } catch (err) {
      res.status(400).json({
        message: "Error",
        err,
      });
    }
  },
});

export default createComment;
