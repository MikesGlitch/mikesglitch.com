/* eslint-disable no-console */
import { Response } from 'express'
import axios from 'axios'
export const sendEmail = async (_: Request, res: Response) => {
  // https://api.sendgrid.com/v3/mail/send

  // BODY
  // ------
//   {
//     "personalizations": [
//         {
//             "to": [
//                 {
//                     "email": "mclarkgb@gmail.com"
//                 }
//             ]
//         }
//     ],
//     "from": {
//         "email": "donotreply@mikesglitch.com",
//         "name": "Mike from MikesGlitch.com"
//     },
//     "subject": "MikesGlitch.com - Call me request",
//     "content": [
//         {
//             "type": "text/html",
//             "value": "boob \n test \n test2 \n test3 - html encode this so it fits in the string"
//         }
//     ]
// }
}
