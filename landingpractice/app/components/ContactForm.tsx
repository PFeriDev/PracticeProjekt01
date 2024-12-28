"use client";
import React, { useState } from "react";
import Button from "./Button";
import { MailCheck, Smartphone } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Itt kellene megvalósítani az űrlap adatainak feldolgozását (pl. email küldés)
  };

  return (
    <section className="w-full lg:h-[40rem]  bg-mainblack lg:flex grid grid-cols-1 gap-y-5 my-auto items-center justify-center">
      <div className="h-full lg:w-1/3 items-center justify-center align-middle lg:flex text-mainwhite ">
        <div className="p-1 text-center lg:text-left">
          <h3 className="font-Poppins font-black text-3xl uppercase mb-3">
            Have a question? <br /> Feel free to ask!
          </h3>
          <p className="font-Inter font-normal text-sm text-maingraytext mb-5">
            Lorem ipsum dolor sit amet consectetur. At lorem consequat eget eget. Vestibulum est vitae vitae etiam
            vitae. Lorem ipsum dolor sit amet consectetur. At lorem consequat eget eget. Vestibulum est vitae vitae
            etiam vitae.
          </p>
          <ul>
            <li>
              <a className="flex mt-3 gap-3 font-Inter font-normal" href="tel:+36209603842">
                <Smartphone className="hover:text-maingreen transition-all duration-300" />
                <b>Mobil:</b> +36 20 960 3842
              </a>
            </li>
            <li>
              <a className="flex mt-3 gap-3 font-Inter font-normal" href="mailto:tamas.pemmer@gmail.com">
                <MailCheck className="hover:text-maingreen transition-all duration-300" />
                <b>Email: </b>tamas.pemmer@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:h-4/5 max-w-[30rem] m-5 border-2 border-maingreen/30 mb-5 bg-mainblack shadow-2xl shadow-maingreen/30 p-10 rounded-xl flex font-Inter font-light  lg:justify-center align-middle items-center text-maingraytext">
        <form action="">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="contactforminputs"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="contactforminputs"
            required
          />
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="contactforminputs"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Describe your project"
            value={formData.message}
            onChange={handleChange}
            className="contactforminputs"
            rows={4}
            required></textarea>
          <div className="flex justify-center mt-5">
            <Button title1="Submit" title2="Thank You!" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;