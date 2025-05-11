"use client";

const Resume = () => {
  return (
    <section id="resume" className="flex-col-center section-padding">
      <div className="w-full flex-col-center gap-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-8">
          My Resume
        </h2>

        {/* Resume Image */}
        <div className="w-full flex-center">
          <div className="w-full md:w-2/3 rounded-xl overflow-hidden card-border">
            <img 
              src="/images/resume.png"
              alt="Resume"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="flex-center mt-10">
          <a
            href="/images/resume.png"
            download
            className="cta-button group w-96"
          >
            <div className="bg-circle" />
            <p className="text">
              Download Resume
            </p>
            <div className="arrow-wrapper">
              <img src="/images/arrow-down.svg" alt="Download Icon" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
