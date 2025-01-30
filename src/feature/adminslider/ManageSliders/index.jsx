"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { deleteSlider, updateSlider } from "@/actions/slideractions";

const ManageSliders = ({ sliders }) => {
  const [loading, setLoading] = useState(false);
  const [editingSlider, setEditingSlider] = useState(null);
  const [editedSliderName, setEditedSliderName] = useState("");
  const [editedSliderImage, setEditedSliderImage] = useState(null); // New image state
  const [showModal, setShowModal] = useState(false);
  const [sliderToDelete, setSliderToDelete] = useState(null);

  // Handle editing a slider
  const handleEditClick = (slider) => {
    setEditingSlider(slider);
    setEditedSliderName(slider.sliderName);
    setEditedSliderImage(null); // Reset image state
  };

  // Handle saving the edited slider
  const handleSaveClick = async () => {
    setLoading(true);
    const res = await updateSlider(
      editingSlider.sliderId,
      editedSliderName,
      editedSliderImage,
      null
    );
    setEditingSlider(null);
    setEditedSliderName("");
    setEditedSliderImage(null);
    setLoading(false);
  };

  // Handle canceling the edit
  const handleCancelClick = () => {
    setEditingSlider(null);
    setEditedSliderName("");
    setEditedSliderImage(null);
  };

  // Handle deleting a slider
  const handleDeleteClick = (slider) => {
    setSliderToDelete(slider);
    setShowModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    setLoading(true);
    const res = await deleteSlider(sliderToDelete.sliderId);
    setSliderToDelete(null);
    setShowModal(false);
    setLoading(false);
  };

  // Handle toggling the active status
  const handleToggleActive = async (sliderId, isActive) => {
    setLoading(true);
    const res = await updateSlider(sliderId, null, null, !isActive);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="lg:w-full sm:w-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row p-4 gap-4 font-medium text-base bg-custom-gradient-blue-yellow text-white w-full border-b">
            <div className="w-[30%]">Slider Name</div>
            <div className="w-[30%]">Slider Image</div>
            <div className="w-[20%]">Actions</div>
            <div className="w-[20%]">Active</div>
          </div>
          <div className="flex flex-col h-[50vh] no-scrollbar overflow-auto">
            {sliders.sliders.length > 0 &&
              sliders.sliders.map((slider) => (
                <div
                  className="flex flex-row items-center p-4 border-b border-[#BBBBBB] gap-4 font-medium text-base w-full"
                  key={slider.sliderId}
                >
                  {editingSlider &&
                  editingSlider.sliderId === slider.sliderId ? (
                    <>
                      <div className="w-[30%]">
                        <input
                          type="text"
                          value={editedSliderName}
                          onChange={(e) => setEditedSliderName(e.target.value)}
                          className="w-full h-[3.5rem] p-2 focus:outline-none outline-[#5BC0DE] bg-[white] border text-[#FF2722] rounded-sm"
                        />
                      </div>
                      <div className="w-[30%]">
                        <input
                          type="file"
                          onChange={(e) =>
                            setEditedSliderImage(e.target.files[0])
                          }
                          className="w-full h-[3.5rem] p-2 focus:outline-none outline-[#5BC0DE] bg-[white] border text-[#FF2722] rounded-sm"
                        />
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
                        {slider.title}
                      </div>
                      <div className="text-sm font-semibold w-[30%]">
                        <img
                          src={`${slider.image.path}`}
                          alt="Slider"
                          className="h-[5rem]"
                        />
                      </div>
                      <div className="flex flex-row w-[20%] items-center font-semibold gap-5">
                        <button
                          className="text-[#5BC0DE]"
                          onClick={() => handleEditClick(slider)}
                        >
                          <FiEdit />
                        </button>
                        <button
                          className="text-[#D53F3A]"
                          onClick={() => handleDeleteClick(slider)}
                        >
                          <RiDeleteBin5Line />
                        </button>
                      </div>
                      <div className="w-[20%]">
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={slider.isActive}
                            onChange={() =>
                              handleToggleActive(
                                slider.sliderId,
                                slider.isActive
                              )
                            }
                          />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this slider?</p>
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

export default ManageSliders;
