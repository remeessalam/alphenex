import React, { useContext, useState } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../constant";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LeadForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const [phoneValue, setPhoneValue] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);
    // console.log(values.phone, phoneValue, "asdfkasdjflaskdjf");
    // return;
    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  // const validatePhoneNumber = (phone) => {
  //   const digitsOnly = phone.replace(/\D/g, "");

  //   const formattedPhone = `+${digitsOnly}`;

  //   const phoneRegex = /^\+\d{10,17}$/;

  //   if (!phoneRegex.test(formattedPhone)) {
  //     toast.error(
  //       "Enter a valid phone number with country code (e.g., +91xxxxxxxxxx, 10–15 digits)."
  //     );
  //     return false;
  //   }

  //   return true;
  // };
  return (
    <div className="flex flex-col gap-5 py-[5rem]">
      <h2
        data-aos="fade-up"
        data-aos-offset="-900"
        className="heading-2 text-center"
      >
        Connect With Us Today!
      </h2>
      <p
        data-aos="fade-up"
        data-aos-offset="-900"
        className="desc text-center max-w-[55rem] mx-auto"
      >
        Whether you have questions about our services, want to request a
        consultation, or are ready to get started, we're just a click away. Fill
        out the form, and one of our experts will be in touch with you shortly.
      </p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        data-aos="fade-up"
        data-aos-offset="-900"
        className="flex flex-col w-full gap-4 rounded-xl p-5 bg-tertiary max-w-3xl mx-auto mt-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-white">Name</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-secondary placeholder-slate-300"
              placeholder="Name"
              {...register("name", {
                required: "Full name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Full name is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.name?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-white">Email</label>
            <input
              type="email"
              className="outline-none p-2 rounded-full bg-white/60 text-secondary placeholder-slate-300"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="error-message">{errors.email?.message}</small>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="">
            <label className="text-sm ml-2 text-white">Phone</label>
            {/*
            <input
              type="tel"
              className="outline-none p-2 rounded-full bg-white/60 text-secondary placeholder-slate-300"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/i,
                  message: "Entered phone number is invalid",
                },
              })}
            /> */}
            <PhoneInput
              country={"in"}
              value={phoneValue}
              enableSearch={true}
              onChange={(value, country) => {
                console.log(value, country);

                setPhoneValue(value);
                const dialCode = country.dialCode.toString();
                let number = value.replace(/\D/g, "");
                if (number.startsWith(dialCode)) {
                  number = number.slice(dialCode.length);
                }
                setValue("phone", `+${dialCode}-${number}`);
              }}
              className="phone-input-custom2"
              placeholder="Enter phone number"
            />
            <small className="error-message">{errors.phone?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-white">Subject</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-secondary placeholder-slate-300"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.subject?.message}</small>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm ml-2 text-white">Message</label>
          <textarea
            rows="4"
            className="outline-none p-2 rounded-2xl bg-white/60 text-secondary placeholder-slate-300"
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Message is required";
                }
              },
            })}
          />
          <small className="error-message">{errors.message?.message}</small>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="primary-btn mt-3 w-fit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
