/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";

interface FileUploadProps {
  setFormData: (value: object) => void;
  src: string;
}

const FileUpload = ({ setFormData, src }: FileUploadProps) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileUpload = (file: any) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      () => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setFormData((prevFormData: any) => ({
            ...prevFormData,
            avatar: downloadURL,
          }));
          setFileUploadError(false);
        });
      }
    );
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      handleFileUpload(selectedFile);
    }
  };

  return (
    <div className="flex flex-col gap-3 justify-center">
      <input
        type="file"
        ref={fileRef}
        onChange={handleFileInputChange}
        accept="image/*"
        className="hidden"
      />
      <img
        onClick={() => fileRef.current && fileRef.current.click()}
        className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
        src={src}
        alt=""
      />
      <p className="text-sm self-center">
        {fileUploadError ? (
          <span className="text-red-700">
            Error image upload (Image must be less than 2 mb)
          </span>
        ) : filePerc > 0 && filePerc < 100 ? (
          <span className="text-slate-700">{`uploading ${filePerc}`}</span>
        ) : filePerc === 100 ? (
          <span className="text-green-700">Successfully Uploaded</span>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

export default FileUpload;
