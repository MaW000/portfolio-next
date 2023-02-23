const ContactButton = () => {
  return (
    <div className="flex justify-center flex-col text-center">
      <h1 className="text-6xl text-lightOrange">Get In Touch</h1>
      <p className="text-xl max-w-2xl mx-auto text-slate mt-5">
        I am looking for any exciting roles whether it be full time or partime.
        Feel free to email me about any oppurtunites
      </p>
      <button className=" mx-auto font-mono px-4 py-2 my-auto mt-12 text-xl 3xl:text-3xl  text-lightOrange bg-transparent rounded focus:outline-none hover:bg-darkOrange border-lightOrange border-2">
        Contact
      </button>
    </div>
  );
};

export default ContactButton;
