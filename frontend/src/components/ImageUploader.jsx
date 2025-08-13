import { useState } from 'react';
import toast from 'react-hot-toast';
import { uploadImage } from '../services/uploadService';
const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [currentImages, setCurrentImages] = useState(null);

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpload = async () => {
    // if (!file) {
    //   toast.error("Please select file first😅");
    // }
    try {
      const data = await uploadImage(file)
      setCurrentImages(data.url);
      toast.success("File uploaded successfully😁👌");
    } catch (error) {
      toast.error("Error in uploading file😭😭");
    }
  }
  return (
    <div>
      <input type="file" onChange={handleImage} alt="uploaded" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;