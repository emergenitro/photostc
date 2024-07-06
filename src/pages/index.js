import Image from "next/image";

function func(url)
{
    return fetch(url,
        {
            headers: {
                Authorization: `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET).toString('base64')}`
            }
        }
    )
    .then(r => r.json())
    .then(data => (data.resources));
}

const Images = () =>
{
    let final;
    func(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`)
    .then(results => {
        final = results.map((result) => result.secure_url);
        console.log(final);
        return (
            <div className="image-gallery">
                {final.map((url, index) => (
                <Image key={index} src={url} alt={`Image ${index}`} width={500} />
                ))}
            </div>
        )
    })
    .catch(error => console.error(error));
};
export default Images;