import { Toaster } from 'react-hot-toast';
import ImageUploader from "./components/ImageUploader";

const App = () => {
  return (
    <div>
      <ImageUploader/>
      <Toaster position="top-right" />
    </div>
  )
}

export default App