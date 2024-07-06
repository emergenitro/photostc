import Image from "next/image";

const ImageGallery = ({ imageUrls }) => {
    console.log("Image URLs:", imageUrls); // Add this line
    return (
        <div className="image-gallery">
            {imageUrls.map((url, index) => (
            <Image key={index} src={url} alt={`Image ${index}`} width={500} />
            ))}
        </div>
    );
};
  

export default ImageGallery;