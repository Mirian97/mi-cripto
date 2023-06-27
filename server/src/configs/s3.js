const aws = require('aws-sdk')

const s3 = new aws.S3({
  endpoint: new aws.Endpoint(process.env.BACKBLAZE_ENDPOINT),
  credentials: {
    accessKeyId: process.env.BACKBLAZE_KEY_ID,
    secretAccessKey: process.env.BACKBLAZE_APP_KEY
  }
})

module.exports = s3
