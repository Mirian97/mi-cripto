require('aws-sdk/lib/maintenance_mode_message').suppress = true
const aws = require('aws-sdk')

const endpoint = new aws.Endpoint(process.env.BACKBLAZE_ENDPOINT)

const s3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.BACKBLAZE_KEY_ID,
    secretAccessKey: process.env.BACKBLAZE_APP_KEY
  }
})

const uploadImage = async (path, buffer, mimetype) => {
  const image = await s3
    .upload({
      Bucket: process.env.BACKBLAZE_APP_NAME,
      Key: path,
      Body: buffer,
      ContentType: mimetype
    })
    .promise()
  return {
    path: image.Key,
    url: `https://${process.env.BACKBLAZE_APP_NAME}.${process.env.BACKBLAZE_ENDPOINT}/${image.Key}`
  }
}

const deleteImage = async (path) => {
  await s3
    .deleteObject({
      Bucket: process.env.BACKBLAZE_APP_NAME,
      Key: path
    })
    .promise()
}

module.exports = {
  uploadImage,
  deleteImage
}
