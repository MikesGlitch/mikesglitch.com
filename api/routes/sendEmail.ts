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
//         "email": "donotreply@mikesglitch.com"
//     },
//     "subject": "Sending with SendGrid is Fun",
//     "content": [
//         {
//             "type": "text/plain",
//             "value": "and easy to do anywhere, even with cURL /n Please do not reply"
//         }
//     ]
// }
}
