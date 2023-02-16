import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="relative 3xl:mx-64 pt-12">
      <div className="bg-[#301008] border-t-4 border-r-4 border-lightOrange absolute  inset-0 -z-10 w-[105%] rounded-2xl " />
      <div className="flex items-center mt-2 mb-10 ml-4 text-lightOrange">
        <h1 className="mr-2.5">01.</h1>
        <h1 className="text-2xl leading-5 text-darkOrange">About me</h1>
        <div className="block h-[1px] w-1/4 bg-lightOrange ml-5" />
      </div>

      <div className="md:grid md:grid-cols-10 gap-12 ml-4 flex flex-col md:flex-row">
        <div className="col-span-5 2fr text-slate">
          <div>
            <p className="mb-3.5 text-base ">
              Hello! My name is Matthew and I enjoy creating things that live on
              the internet. My intrest in the web started back when I built my
              first computer in elementary school. Since then I have lived on
              the internet and software.
            </p>
            <p className="mb-3.5 text-base">
              Fast-forward to today I have completed a bootcamp and have been
              furthering my skills everyday.
            </p>
            <p className="mb-3.5 text-base">
              I also recently have been coding alot of projects on my github.
            </p>
          </div>
          <ul className="grid grid-cols-2">
            <li className='before:content-["▹"] before:text-lightOrange'>{`Javascript (ES6+)`}</li>
            <li className='before:content-["▹"] before:text-lightOrange'>{`React`}</li>
            <li className='before:content-["▹"] before:text-lightOrange'>{`Node.js`}</li>
            <li className='before:content-["▹"] before:text-lightOrange'>{`TypeScript`}</li>
            <li className='before:content-["▹"] before:text-lightOrange'>{`React`}</li>
            <li className='before:content-["▹"] before:text-lightOrange'>{`React`}</li>
          </ul>
        </div>
        <div className="relative col-span-5 mr-8 md:mr-0 md:-mt-14 flex mb-20">
          <div className="top-5 left-5 absolute w-full h-full rounded-xl z-0 border-lightOrange border-2"></div>
          <div className="absolute bg-lightOrange w-full h-full rounded-xl"></div>
          <Image
            src="/cover.jpg"
            width={1000}
            height={1000}
            alt="cover"
            className="w-full z-11 grayscale mix-blend-multiply rounded-xl  hover:grayscale-0 hover:mix-blend-normal hover:ease-linear"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
