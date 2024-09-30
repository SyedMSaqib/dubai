"use client"
import { AddData, setCurrentPage, setFormState } from "@/lib/Redux/features/contactSlice"
import { useAppDispatch, useAppSelector } from "@/lib/Redux/hooks"
import React, { useState } from "react"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"

// Define regex patterns for validation
const regexPatterns = {
  firstName: /^[a-zA-Z]{2,}$/, // First name: Only letters, min 2 characters
  lastName: /^[a-zA-Z]{2,}$/, // Last name: Only letters, min 2 characters
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email pattern: basic email format
}

/**
 * A form to collect contact details from the user.
 *
 * The form includes fields for first name, last name, email, phone number, pick up point (area) and room or apartment.
 * The form validates the input fields client-side and displays error messages if the input is invalid.
 * The form also prevents submission if the input is invalid.
 * The form is submitted when the user clicks the "Next" button.
 */

const ContactForm = () => {
  const dispatch = useAppDispatch()
  const formDataFromRedux = useAppSelector((state) => state.formData.formData)

  React.useEffect(() => {
    setFormValues(formDataFromRedux)
  }, [formDataFromRedux])

  // State to hold form values
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    area: "",
    roomOrApartment: "",
  })

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    area: "",
    roomOrApartment: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormValues({ ...formValues, [id]: value })
  }

  const handlePhoneChange = (value: string | undefined) => {
    setFormValues({ ...formValues, phone: value || "" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      area: "",
      roomOrApartment: "",
    }

    // Regex validation for names and email
    if (!regexPatterns.firstName.test(formValues.firstName.trim())) {
      newErrors.firstName =
        "First name should contain only letters and be at least 2 characters long"
    }
    if (!regexPatterns.lastName.test(formValues.lastName.trim())) {
      newErrors.lastName = "Last name should contain only letters and be at least 2 characters long"
    }
    if (!regexPatterns.email.test(formValues.email.trim())) {
      newErrors.email = "Invalid email format"
    }

    // Length validation for area and room/apartment
    if (formValues.area.trim().length < 3) {
      newErrors.area = "Area should be at least 3 characters long"
    }
    if (formValues.roomOrApartment.trim().length < 3 && formValues.roomOrApartment.trim() !== "") {
      newErrors.roomOrApartment = "Room or Apartment should be at least 3 characters long"
    }

    // Phone number validation
    if (!formValues.phone || !isValidPhoneNumber(formValues.phone)) {
      newErrors.phone = "Invalid phone number"
    }

    setErrors(newErrors)

    // Console log all form values
    // console.log(formValues)

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) return

    // Form is valid, handle form submission
    dispatch(AddData(formValues))
    dispatch(setFormState("Payment Details"))
    dispatch(setCurrentPage("Payment Details"))
  }

  return (
    <form onSubmit={handleSubmit} className="p-10 lg:p-0  mx-auto ">
      <div className="md:flex md:gap-5 ">
        <div className="mb-2 md:flex-1">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            className={`bg-gray-50 border ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div className="mb-5 flex-1">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            className={`bg-gray-50 border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
          className={`bg-gray-50 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg  block w-full p-2.5`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Phone No / WhatsApp No
        </label>
        <PhoneInput
          placeholder="Enter phone number"
          value={formValues.phone}
          onChange={handlePhoneChange}
          defaultCountry="AE"
          className={`bg-gray-50 border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Pick Up Point (Must type area)
        </label>
        <input
          type="text"
          id="area"
          value={formValues.area}
          onChange={handleChange}
          className={`bg-gray-50 border ${
            errors.area ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
        />
        {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area}</p>}
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Room or Apartment (optional)
        </label>
        <input
          type="text"
          id="roomOrApartment"
          value={formValues.roomOrApartment}
          onChange={handleChange}
          className={`bg-gray-50 border ${
            errors.roomOrApartment ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
          placeholder="Or Update Upon Arrival"
        />
        {errors.roomOrApartment && (
          <p className="text-red-500 text-xs mt-1">{errors.roomOrApartment}</p>
        )}
      </div>

      <button type="submit" className="bg-black text-white rounded-md p-2 w-full">
        Next
      </button>
    </form>
  )
}

export default ContactForm
