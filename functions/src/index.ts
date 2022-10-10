// import * as functions from "firebase-functions";
import createComment from "./comments/restful/createComment";
import deleteComment from "./comments/restful/deleteComment";
import getAllComments from "./comments/restful/getAllComments";
import updateComments from "./comments/restful/updateComments";
import onCommentCreated from "./comments/reactive/onCommentCreated";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//     if(request.method ==="GET"){
//         response.status(200).json({message:"Hello from Firebase!"});
//     }else{
//         response.status(400).json({message:"Bad request"});
//     }
// });

exports.createComment = createComment;
exports.deleteComment = deleteComment;
exports.getAllComments = getAllComments;
exports.updateComment = updateComments;
exports.onCommentCreated = onCommentCreated;
