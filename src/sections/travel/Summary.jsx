import React from 'react'

const Summary = () => {
  return (
        <div className="max-w-6xl w-full flex-col-center gap-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Who am I? ✨
        </h2>
        
        <div className='flex-center'>
        <div className="grid-2-cols gap-10 w-full items-center">
          <div className="w-100 h-100 flex justify-center">
            <img
              src="/portfolio.png"
              alt="Shrinivas Portrait"
              className="rounded-xl object-cover w-full h-full md:w-[80%] shadow-lg"
            />
          </div>
        </div>

        <div className="text-white-50 text-lg space-y-6">
        <p>
              Hey there! 👋 I'm <span className="text-white font-semibold">Shrinivas</span>, a passionate explorer, creative developer, and lifelong learner.
              My journey into tech started with curiosity and grew into a passion for building user-centric digital experiences.
            </p>

            <p>
              Outside the world of code, you'll find me traveling — soaking in the colors of new cities, the calm of mountains, and the chaos of street food markets.
              Each trip teaches me something new about culture, life, and myself.
            </p>
            <p>
              I'm also a storyteller ✍️. Whether it's through visuals, writing, or code — I love to share what I learn and experience with others.
              I believe in clean design, purposeful tech, and human connection.
            </p>

            <p>
              Let’s connect and create something meaningful together. 🚀
            </p>
            <a
              href="images/resume.png"
              download
              className="cta-button group mt-5 inline-flex w-88"
            >
              <div className="bg-circle" />
              <p className="text">Download Resume</p>
              <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="Download" />
              </div>
            </a>
        </div>
        </div>
      </div>
  )
}

export default Summary