require('dotenv').config();
const aws = require('aws-sdk');
const fs = require('fs');


// Instantiate the S3 class using the official AWS-SDK
const s4 = new aws.S3({
    endpoint: 'http://s4-client',
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
});


// Create a random bucket name
var Bucket = "s4-test-" + Math.random().toString(36).substring(2, 15);


// Create a bucket using s4-client
s4.createBucket({
    Bucket,
}, (err, response) => {
    if (err) return console.error(err);
    else console.log(`Successfully created bucket: ${Bucket}`);


    // Upload example.pdf to the new bucket
    s4.putObject({
        Bucket,
        Key: `example.pdf`,
        Body: fs.readFileSync(__dirname + '/example.pdf'),
    }, (err, response) => {
        if (err) return console.error(err);
        console.log("Successfully uploaded example.pdf into the bucket: ");
        console.log(`${process.env.S4_HOST}/${Bucket}/example.pdf`);
    });
});
