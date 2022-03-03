import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBlock: "5vw",
        boxSizing: "border-box",
        paddingInline: "5vw",
      }}
    >
      <h1 style={{ fontWeight: 700, marginBottom: 50, color: "#2F77AD" }}>
        Contact Us
      </h1>
      <div
        style={{
          boxShadow: "3px 9px 31px rgb(208, 208, 208)",
          backgroundColor: "white",
          borderRadius: 13,
          maxWidth: 650,
          width: "100%",
          paddingInline: "calc( 3vw + 20px )",
          paddingBlock: 50,
          boxSizing: "border-box",
          marginInline: 20,
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <label style={{ color: "#4F4F4F" }} htmlFor="Name">
            Full Name *
          </label>
          <input
            style={{
                border: errors.name?"2px solid red":"1px solid #B4BEC8",
              paddingInline: 12,
              paddingBlock: 15,
              marginTop: 8,
              borderRadius: 5.5,
              marginBottom: errors.name ? 0 : 16,
            }}
            placeholder="Full Name"
            id="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p style={{ color: "red", margin: "5px 0 10px 0" }}>
              This field is required
            </p>
          )}

          <label style={{ color: "#4F4F4F" }} htmlFor="Email">
            Email Address *
          </label>
          <input
            style={{
            border: errors.email?"2px solid red":"1px solid #B4BEC8",
              paddingInline: 12,
              paddingBlock: 15,
              marginTop: 8,
              borderRadius: 5.5,
              marginBottom: errors.email ? 3 : 16,
            }}
            placeholder="Email Address"
            id="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p style={{ color: "red", margin: "5px 0 10px 0" }}>
              This field is required
            </p>
          )}

          <label style={{ color: "#4F4F4F" }} htmlFor="Message">
            Your Message *
          </label>
          <textarea
            style={{
              border: errors.message?"2px solid red":"1px solid #B4BEC8",
              paddingInline: 12,
              paddingBlock: 15,
              marginTop: 8,
              borderRadius: 5.5,
              marginBottom: errors.message ? 3 : 16,
              minHeight: 50,
              resize: "vertical",
            }}
            placeholder="Type Here..."
            id="Message"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p style={{ color: "red", margin: "5px 0 20px 0" }}>
              This field is required
            </p>
          )}

          <input
            type="submit"
            value="Submit"
            style={{
              marginBlock: 20,
              backgroundColor: "#2F77AD",
              borderRadius: 6,
              color: "white",
              appearance: "none",
              border: "none",
              paddingBlock: 12,
              cursor:"pointer"
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
