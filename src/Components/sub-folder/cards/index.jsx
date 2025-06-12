import React from "react";
export default function Cards({contents,cardFor,desc}) {
    console.log(contents)
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-white">
          {cardFor}
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg">
        {desc}
        </p>
      </div>

      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
        {contents.map((contents, index) => {
          return (
            <div
              key={contents.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 == 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              {/* <div className="absolute sm:left-1/2 left-10 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={contents.img}
                  alt={contents.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div> */}

              <div
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                  index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
              >
                <div className="flex items-center space-x-8">
                  {/* Company Logo/Image */}
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={contents.img}
                      alt={contents.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {contents?.role}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {contents.name}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="text-sm text-gray-500 mt-2">
                      {contents.date}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400">{contents.desc}</p>
                { contents?.skills && <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {contents?.skills?.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
