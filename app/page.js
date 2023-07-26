"use client"

import { useState } from "react"

export default function Home() {

  const [file, setFile] = useState()

  const handleFile = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Upload a Photo</h1>
      <input type="file" accept="image/*" onChange={handleFile} />
      {file &&
        <>
          <p>{file.name}</p>
          <img src={URL.createObjectURL(file)}/>
        </>
      }
    </main>
  )
}
