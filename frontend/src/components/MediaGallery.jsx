import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchAllMedia } from "../services/uploadService";


const MediaGallery = () => {
    const [ media, setMedia] = useState([]);

    useEffect(()=>{
        const loadMedia = async () => {
            try {
                const result = await fetchAllMedia();
                setMedia(result);
                toast.success(" Media loaded successfully🤩");
                
            } catch (error) {
                console.error(error);
                toast.error("Error in fetching media😑😑");
                
            }
        };
        loadMedia();
    },[]);


    return (
        <div>
            <h3>Media Gallery😍</h3>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "15px",
            }}>
                {media.map((item) => (
                    <div key={item._id} style={{ border: "1px solid #ccc", padding: "5px", borderRadius: "8px" }}>
                        {item.type === "image" ? (
                            <img src={item.url} alt="uploaded" style={{ width: "100%", borderRadius: "5px" }}/>
                        ):(
                            <video src={item.url} type="video/mp4" controls style={{ width: "100%", borderRadius: "5px" }}></video>
                        )}

                    </div>
                ))}

            </div>
        </div>
    )
}

export default MediaGallery;