// pages/api/sign-img.js
import { v2 as cloudinary } from 'cloudinary';

const signImg = async (req, res) => {
  try {
    const paramsToSign = req.body.paramsToSign; 

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      `${process.env.CLOUDINARY_API_SECRET}`
    );

    res.json({
        signature,
        timestamp: paramsToSign.timestamp,
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
      });
  } catch (error) {
    console.error('Error signing request:', error);
    res.status(500).json({ error: 'Signature generation failed' });
  }
};

export default signImg;
