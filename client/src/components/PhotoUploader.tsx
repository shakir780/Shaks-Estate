/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { AiTwotoneDelete } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

import { app } from "../firebase";
import { useState } from "react";

interface FormDataWithImages extends FormData {
  imageUrls?: string[];
}

interface PhotoUploaderProps {
  formData: FormDataWithImages;
  setFormData: React.Dispatch<React.SetStateAction<FormDataWithImages>>;
}

const PhotoUploader = ({ formData, setFormData }: PhotoUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [imageUploadError, setImageUploadError] = useState<string | false>(
    false
  );
  const storeImage = async (file: File) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleImageSubmit = () => {
    if (files.length > 0 && files.length < 7 && formData.imageUrls.length < 7) {
      const promises = [];

      for (let i = 0; i < files?.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls: unknown[]) => {
          const stringUrls = urls as string[];

          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(stringUrls),
          });
          setImageUploadError(false);
        })
        .catch(() => {
          setImageUploadError("Image Upload failed (2 mb max per image)");
        });
    } else {
      setImageUploadError("You can only Upload 6 image per listing");
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const selectAsMain = (index: number) => {
    const updatedImageUrls = [...formData.imageUrls]; // Create a copy of the imageUrls array
    if (index >= 0 && index < updatedImageUrls.length) {
      const clickedImage = updatedImageUrls[index]; // Get the clicked image
      updatedImageUrls.splice(index, 1); // Remove the clicked image from its current position
      updatedImageUrls.unshift(clickedImage); // Add the clicked image at the beginning of the array
      setFormData({ ...formData, imageUrls: updatedImageUrls }); // Update state with the new image order
    }
  };

  return (
    <div>
      <div className="flex gap-4">
        <input
          className="p-3 border border-gray-300 rounded w-full"
          type="file"
          id="images"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files || []))}
        />
        <button
          onClick={handleImageSubmit}
          type="button"
          className="p-3 text-blue-700 border border-blue-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
        >
          Upload
        </button>
      </div>
      <p className="text-red-700 text-sm">
        {imageUploadError && imageUploadError}
      </p>
      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-2 w-full ">
        {formData.imageUrls.length > 0 &&
          formData.imageUrls.map((url, i) => (
            <div className="h-40 flex relative">
              <img
                src={url}
                alt="listing image"
                className="w-full  object-cover rounded-lg"
              />
              <button
                onClick={() => handleRemoveImage(i)}
                className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3"
              >
                <AiTwotoneDelete />
              </button>
              <button
                type="button"
                onClick={() => selectAsMain(i)}
                className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3"
              >
                {url === formData.imageUrls[0] && <FaStar />}
                {url !== formData.imageUrls[0] && <CiStar />}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PhotoUploader;
