import LoggerInstance from "../../loaders/logger";

import path from "path";
import config from "../../config";
import { SES } from "@aws-sdk/client-ses";
const mailComposer = require("nodemailer/lib/mail-composer");
const { renderFile } = require("ejs");

const SESInstance = new SES(config.awsConfig);

export const sendMail = async (
  email: Array<string>,
  subject: string,
  body: string
) => {
  var params = {
    Destination: {
      /* required */
      ToAddresses: [...email],
    },
    Message: {
      /* required */
      Body: {
        Html: {
          Data: body,
          Charset: "Utf-8",
        },
        Text: {
          Data: "Please use a HTML Client to view this email.",
          Charset: "Utf-8",
        },
      },
      Subject: {
        Data: subject,
        Charset: "utf-8",
      },
    },
    Source: "paperpilot.srm@gmail.com" /* required */,
    ReplyToAddresses: [
      "paperpilot.srm@gmail.com",
      /* more items */
    ],
  };
  try {
    await SESInstance.sendEmail(params);
  } catch (error) {
    LoggerInstance.error(error);
    throw Error(error);
  }
};
