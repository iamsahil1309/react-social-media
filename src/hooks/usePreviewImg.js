import { useState } from 'react'
import useShowToast from './useShowToast'

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const showToast = useShowToast()
  const maxFileSizeInBytes = 2 * 1024 * 1021  //2mb

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if(file && file.type.startsWith("image/")){
        if(file.size > maxFileSizeInBytes) {
            showToast("Error", "File size must be atleast 2mb", "error")
            setSelectedFile(null)
            return
        }
        const reader = new FileReader()

        reader.onload = () => {
            setSelectedFile(reader.result)
        }
        reader.readAsDataURL(file)
    } else {
        showToast("Error", "Please select an image file", "error")
        setSelectedFile(null)
    }
  }
  return {selectedFile, handleImageChange, setSelectedFile}
}

export default usePreviewImg