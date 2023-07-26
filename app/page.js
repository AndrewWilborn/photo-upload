"use client"
import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytes } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBnB2V7F1RQltugOrxioCpToNjCfX5oTp0",
  authDomain: "my-first-firestore-ajw.firebaseapp.com",
  projectId: "my-first-firestore-ajw",
  storageBucket: "my-first-firestore-ajw.appspot.com",
  messagingSenderId: "102677368984",
  appId: "1:102677368984:web:0ba04221481f65702300ed"
};

export default function Home() {

  const [file, setFile] = useState()
  const [uploadedFile, setUploadedFile] = useState()

  const handleFile = (e) => {
    setFile(e.target.files[0])
    const app = initializeApp(firebaseConfig) // connects to our project
    const storage = getStorage(app) // connects to storage

    const filename = e.target.files[0].name
    const imageRef = ref(storage, 'images/' + filename)

    const url = `https://firebasestorage.googleapis.com/v0/b/my-first-firestore-ajw.appspot.com/o/images%2F${filename}?alt=media`

    uploadBytes(imageRef, e.target.files[0])
      .then(() => setUploadedFile(url))
      .catch(alert)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Upload a Photo</h1>
      <input type="file" accept="image/*" onChange={handleFile} />
      {file &&
        <>
          <p>Image from computer</p>
          <img src={URL.createObjectURL(file)}/>
        </>
      }
      {uploadedFile &&
        <>
          <p>Image from storge</p>
          <img src={uploadedFile}/>
        </>
      }
    </main>
  )
}
