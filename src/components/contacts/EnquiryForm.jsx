"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const EnquiryForm = ({ showheading = true }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    dob: null,
    time: "",
    gender: "",
    birthplace: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date, name) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${formData.name}\nDOB: ${
      formData.dob ? formData.dob.toLocaleDateString() : ""
    }\ntime: ${formData.time}\nBirth Place: ${formData.birthplace}\nMobile: ${
      formData.mobile
    }\nMessage: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=917001790055&text=${encodedMessage}`
      : `https://api.whatsapp.com/send?phone=917001790055&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setFormData({
      name: "",
      mobile: "",
      dob: null,
      time: "",
      birthplace: "",
      message: "",
    });
  };
  return (
    <div className="relative md:p-6 p-4 lg:p-10 w-full rounded-md">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-md"
        style={{
          backgroundImage: "url('/background/enquiry-form-bg.png')",
        }}
      ></div>

      <div className="absolute inset-0 rounded bg-[linear-gradient(180deg,_#336EFF_0%,_#E3D000_100%)] opacity-80"></div>

      <div className="relative flex flex-col gap-8 justify-center items-center w-full text-center">
        {showheading && (
          <h1 className="text-2xl font-semibold text-white">
            Quick Inquiry Now
          </h1>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full justify-center items-center"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 rounded-md h-[3.5rem] bg-white border border-[#00000050] outline-none placeholder:text-site-main-gray text-site-main-gray text-sm"
          />
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile No"
            required
            className="w-full px-4 rounded-md h-[3.5rem] bg-white border border-[#00000050] outline-none placeholder:text-site-main-gray text-site-main-gray text-sm"
          />
          <div className="!w-full">
            <DatePicker
              selected={formData.dob}
              onChange={(date) => handleDateChange(date, "dob")}
              dateFormat="MM/dd/yyyy"
              placeholderText="DOB"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              required
              className="!w-full px-4 rounded-md h-[3.5rem] bg-white border border-[#00000050] outline-none placeholder:text-site-main-gray text-site-main-gray text-sm"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
            <div className="">
              <DatePicker
                selected={
                  formData.time
                    ? new Date(`1970-01-01T${formData.time}:00`)
                    : null
                }
                onChange={(date) => {
                  if (date instanceof Date) {
                    const timeString = date
                      .toTimeString()
                      .split(" ")[0]
                      .substring(0, 5);
                    handleDateChange(timeString, "time");
                  }
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="hh:mm aa"
                placeholderText="Time"
                required
                className="px-4 w-full rounded-md h-[3.5rem]  bg-white border border-[#00000050] outline-none placeholder:text-site-main-gray text-site-main-gray text-sm"
              />
            </div>
            <input
              type="text"
              name="birthplace"
              value={formData.birthplace}
              onChange={handleChange}
              placeholder="Birth Place"
              required
              className="w-full px-4 rounded-md h-[3.5rem] bg-white border border-[#00000050] outline-none placeholder:text-site-main-gray text-site-main-gray text-sm"
            />
          </div>

          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-4 rounded-md h-[3.5rem] bg-white border border-[#00000050] outline-none placeholder:text-site-main-gray text-site-main-gray text-sm"
          />
          <button className="h-[3.5rem] relative px-6 w-fit flex justify-center items-center bg-white border border-black/50 rounded-md text-base font-medium text-site-main-blue">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
