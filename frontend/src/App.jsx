import { Toaster } from 'react-hot-toast';
import ImageUploader from "./components/ImageUploader";
import MediaGallery from './components/MediaGallery';

const App = () => {
  return (
    <div style={{padding:"20px", maxWidth:"900px",margin:"auto"}}>
      <h1 style={{textAlign:"center"}}>Media Upload & Gallery</h1>
      <ImageUploader/>



      <MediaGallery/>

      <Toaster position="top-right" />
    </div>
  )
}

export default App