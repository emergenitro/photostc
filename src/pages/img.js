'use client';

const cloudinary = require('cloudinary').v2;
import { CldUploadWidget } from 'next-cloudinary';

cloudinary.config(
    {
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
    }
);

const Home = () => {
  return (
    <CldUploadWidget 
        options={{ sources: ['local', 'url'] }}
        signatureEndpoint="/api/sign-img" 
        onSuccess={(results) => {
            db.collection('images').insertOne({ url: results.info.secure_url });
        }}
    >
        {({ open }) => {
            return (
            <button onClick={() => open()}>
                Upload an Image
            </button>
            );
        }}
    </CldUploadWidget>
  );
};

export default Home;