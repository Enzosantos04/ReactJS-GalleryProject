"use client";

import { Modal } from "@/components/modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState("");
  function handleModal(id: number) {
    const photo = photoList.find((item) => item.id === id);
    if (photo) {
      setImageModal(photo.url);
      setShowModal(true);
    }
    setShowModal(!showModal);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <div className=" bg-black h-screen w-full">
      <h1 className="text-center text-3xl font-bold pt-3 text-white mb-10">
        Photos Gallery
      </h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((item) => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => handleModal(item.id)}
          />
        ))}
      </section>
      {showModal && <Modal image={imageModal} closeModal={closeModal} />}
    </div>
  );
}
