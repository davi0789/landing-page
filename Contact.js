import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted", data);
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <div className="contact-page-wrapper">
      <h1>Contact Us</h1>
      <form className="contact-form-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Nombre es requerido" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        
        <input
          type="email"
          placeholder="Your Email"
          {...register("email", { required: "Email es requerido" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        
        <input
          type="text"
          placeholder="Your Address"
          {...register("address", { required: "Dirección es requerida" })}
        />
        {errors.address && <p>{errors.address.message}</p>}
        
        <button type="submit" className="primary-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;