import * as functions from "firebase-functions";
import db from "../../config/firestore-config";
import { IComments } from "../models/models";

const profanity: string[] = ["bitch", "asshole"];

const onCommentCreated = functions.firestore
  .document("comments/{commentId}")
  .onCreate((snapshot, context) => {
    var comment = <IComments>snapshot.data();

    var commentText: string = comment.comment;

    var star = "";
    profanity.forEach((word) => {
      if (commentText.includes(word)) {
        for (let i = 0; i < word.length; i++) {
          star += "*";
        }

        commentText = commentText.replace(new RegExp(word, "g"), star);
        return snapshot.ref.update({ text: commentText });
      }
      return null;
    });

    comment.comment = commentText;
    const query = db.collection("badwords");
    const querySnapshot = query.get();

    console.log(querySnapshot);
    console.log("Trigger", comment);
    return null;
  });

export default onCommentCreated;
