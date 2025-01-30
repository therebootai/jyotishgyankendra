"use client";
import { deleteMedia, getMedia, updateMedia } from "@/actions/mediaactions";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const ManageMedia = ({ media, pagination }) => {
  const [loading, setLoading] = useState(false);
  const [editingMedia, setEditingMedia] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mediaToDelete, setMediaToDelete] = useState(null);
  const [editedMediaName, setEditedMediaName] = useState("");
  const [editedMediaImage, setEditedMediaImage] = useState(null);
  const [editedMediaVideo, setEditedMediaVideo] = useState("");

  const handleEditClick = (med) => {
    setEditingMedia(med);
    setEditedMediaName(med.mediaTitle);
    setEditedMediaVideo(med.mediaVideo);
    setEditedMediaImage(null); // Reset image state
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pagination.totalPages) {
      getMedia(newPage);
    }
  };

  const handleSaveClick = async () => {
    setLoading(true);
    const res = await updateMedia(
      editingMedia.mediaId,
      editedMediaName,
      editedMediaImage,
      editedMediaVideo
    );
    setEditedMediaImage(null);
    setEditedMediaName("");
    setEditedMediaVideo("");
    setEditingMedia(null);
    setLoading(false);
  };

  // Handle canceling the edit
  const handleCancelClick = () => {
    setEditingMedia(null);
    setEditedMediaName("");
    setEditedMediaImage(null);
    setEditedMediaVideo("");
  };

  // Handle deleting a slider
  const handleDeleteClick = (media) => {
    setMediaToDelete(media);
    setShowModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    setLoading(true);
    const res = await deleteMedia(mediaToDelete.mediaId);
    setMediaToDelete(null);
    setShowModal(false);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row p-4 gap-4 font-medium text-base bg-custom-gradient-blue-yellow text-white w-full border-b">
          <div className="w-[30%]">Media Name</div>
          <div className="w-[30%]">Media Type</div>
          <div className="w-[30%]">Media Image / Video</div>
          <div className="w-[20%]">Actions</div>
        </div>
        <div className="flex flex-col h-[50vh] no-scrollbar overflow-auto">
          {media.map((med) => (
            <div
              className="flex flex-row items-center p-4 border-b border-[#BBBBBB] gap-4 font-medium text-base w-full"
              key={med.mediaId}
            >
              {editingMedia && editingMedia._id === med._id ? (
                <>
                  <div className="w-[30%]">
                    <input
                      type="text"
                      value={editedMediaName}
                      onChange={(e) => setEditedMediaName(e.target.value)}
                      className="w-full h-[3.5rem] p-2 focus:outline-none outline-[#5BC0DE] bg-[white] border text-[#FF2722] rounded-sm"
                    />
                  </div>
                  <div className="w-[30%]">
                    {editingMedia.mediaType === "photo" ? (
                      <input
                        type="file"
                        onChange={(e) => setEditedMediaImage(e.target.files[0])}
                        className="w-full h-[3.5rem] p-2 focus:outline-none outline-[#5BC0DE] bg-[white] border text-[#FF2722] rounded-sm"
                      />
                    ) : (
                      <input
                        type="text"
                        value={editedMediaVideo}
                        onChange={(e) => setEditedMediaVideo(e.target.value)}
                        className="w-full h-[3.5rem] p-2 focus:outline-none outline-[#5BC0DE] bg-[white] border text-[#FF2722] rounded-sm"
                      />
                    )}
                  </div>
                  <div className="flex flex-row items-center w-[20%] font-semibold gap-5">
                    <button
                      className="text-[#5BC0DE]"
                      disabled={loading}
                      onClick={handleSaveClick}
                    >
                      {loading ? "Saving..." : <FaCheck />}
                    </button>
                    <button
                      className="text-[#D53F3A]"
                      onClick={handleCancelClick}
                    >
                      <RxCross2 />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-sm font-semibold w-[30%]">
                    {med.mediaTitle}
                  </div>
                  <div className="text-sm font-semibold w-[30%]">
                    {med.mediaType}
                  </div>
                  <div className="text-sm font-semibold w-[30%]">
                    {med.mediaImage ? (
                      <img
                        src={`${med.mediaImage.path}`}
                        alt="Media"
                        className="h-[5rem]"
                      />
                    ) : (
                      <p>{med.mediaVideo}</p>
                    )}
                  </div>
                  <div className="flex flex-row w-[20%] items-center font-semibold gap-5">
                    <button
                      className="text-[#5BC0DE]"
                      onClick={() => handleEditClick(med)}
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="text-[#D53F3A]"
                      onClick={() => handleDeleteClick(med)}
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-2 mt-4">
          <button
            className="px-3 py-1 border rounded"
            onClick={() =>
              handlePageChange(parseInt(pagination.currentPage) - 1)
            }
            disabled={pagination.currentPage === 1}
          >
            Prev
          </button>
          {Array.from(
            { length: Math.min(5, pagination.totalPages) },
            (_, i) => {
              const pageNumber =
                parseInt(pagination.currentPage) <= 3
                  ? i + 1
                  : parseInt(pagination.currentPage) + i - 2 >
                    pagination.totalPages
                  ? pagination.totalPages - 4 + i
                  : parseInt(pagination.currentPage) + i - 2;
              return (
                <button
                  key={i}
                  className={`px-3 py-1 border rounded ${
                    parseInt(pagination.currentPage) === pageNumber
                      ? "bg-gray-300"
                      : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            }
          )}
          <button
            className="px-3 py-1 border rounded"
            onClick={() =>
              handlePageChange(parseInt(pagination.currentPage) + 1)
            }
            disabled={
              parseInt(pagination.currentPage) === pagination.totalPages
            }
          >
            Next
          </button>
        </div>
      </div>
      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this media?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={confirmDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMedia;
