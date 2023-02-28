import { useState } from "react";
const ContactButton = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-center flex-col text-center">
      <h1 className="text-6xl text-lightOrange">Get In Touch</h1>
      <p className="text-xl max-w-2xl mx-auto text-slate mt-5">
        I am looking for any exciting roles whether it be full time or partime.
        Feel free to email me about any oppurtunites
      </p>
      <div className="relative mt-12 ">
        {toggle && (
          <div className="text-slate bottom-12 rounded-lg left-0 right-0 m-auto  w-fit  absolute bg-stone-700 mt-8 animate-fade mb-4 inline-block px-2  after:content-[''] after:absolute after:left-0 after:right-0 after:border-t-8 after:border-l-transparent after:border-r-transparent after:border-l-8 after:border-r-8 after:w-0 after:h-0 after:m-auto">
            <h1 className="  ">Email has been copied to your clipboard</h1>
          </div>
        )}
        <button
          onClick={() => {
            setToggle(true);
            navigator.clipboard.writeText("mwardlow0@gmail.com");
          }}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          className=" mx-auto font-mono px-4 py-2 my-auto mt-0 text-xl 3xl:text-3xl  text-lightOrange bg-transparent rounded focus:outline-none hover:bg-darkOrange border-lightOrange border-2"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default ContactButton;
