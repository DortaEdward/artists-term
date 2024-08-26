"use client";

import { useUploadThing } from "@/utils/uploadthing";
import { redirect } from "next/navigation";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { MdClose } from "react-icons/md";

export default function UploadComponent() {
  // Form State
  const [image, setImage] = useState<string>();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [description, setDescription] = useState<string>("");

  // Api State
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => {
      setIsUploading(false);
      console.log("Upload Success");
    },
    onUploadError: () => {
      setIsUploading(false);
      console.log("Upload error");
    },
    onUploadBegin: () => {
      setIsUploading(true);
      console.log("Upload began");
    },
  });

  function handleImageUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImageFiles([file]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleRemovingImage() {
    setImage("");
    setImageFiles([]);
  }

  async function handlePostUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!imageFiles || imageFiles.length <= 0 || !description) {
      return;
    }
    const res = await startUpload(imageFiles);
    console.log(res)
    if (res) {
      const payload = {
        description: description,
        images: [res[0]?.url],
        userId: res[0]?.serverData.uploadedBy,
        imageKey: res.keys,
      };
      try {
        await fetch("/api/post", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        // Need to fix the redirect
      } catch (error) {
        setError("ERROR: Unable to upload image");
      }
      
    }
  }

  return (
    <div className="my-6 flex w-full min-w-96 max-w-2xl flex-col items-center justify-center gap-4 rounded-lg border-2 px-6 py-4">
      {image ? (
        <div className="relative flex aspect-square w-full max-w-lg items-center justify-center overflow-hidden rounded-md border shadow-lg">
          <img src={image} className="h-full w-full object-cover" />
          <MdClose
            size={32}
            className="absolute right-4 top-4 cursor-pointer rounded bg-white/50"
            onClick={handleRemovingImage}
          />
        </div>
      ) : (
        <div className="flex aspect-square w-full max-w-lg items-center justify-center rounded-md border shadow-lg">
          <input
            type="file"
            className="h-full w-full"
            onChange={handleImageUpload}
          />
        </div>
      )}
      <div className="my-2"></div>
      <form
        className="flex w-full flex-col items-center gap-4"
        onSubmit={handlePostUpload}
      >
        <div className="relative flex w-full flex-col shadow-lg">
          <label className="absolute -top-4 ml-4 rounded bg-white px-2 text-xl font-medium">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter Description..."
            className="h-32 w-full resize-none rounded border px-2 py-4"
            onChange={(e) => setDescription(e.target.value)}
            disabled={isUploading}
          />
        </div>
        <button
          className={`rounded ${isUploading ? "bg-red-500/50" : "bg-red-500"} px-6 py-1 font-medium text-white`}
          disabled={isUploading}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
