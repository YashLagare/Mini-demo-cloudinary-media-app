import axios from "axios";

export const uploadImage = async (file) =>{
    return new Promise((resolve, reject) => {
        const render = new FileReader();

        render.onloadend = async () => {
            try {
                const { data } = await axios.post('http://localhost:5000/api/media/upload', {
                    file: render.result, // base64
                });
                resolve(data);
            } catch (error) {
                console.log(error);
                reject(error); // reject  so caller can handel error
            }
        };
        render.readAsDataURL(file);
    });
}

export const fetchAllMedia = async () => {
    try {
        const { data } = await axios.get('http://localhost:5000/api/media');
        return data.media;
    } catch (error) {
        console.log("Error in fetchAllMedia", error);
        return [];
    }
};