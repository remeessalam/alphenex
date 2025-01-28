import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
import aboutImg2 from "../assets/images/aboutus-img2.webp";
import aboutImg3 from "../assets/images/home-about-img.jpeg";
// import teamImg1 from "../assets/images/team1.jpeg";
// import teamImg2 from "../assets/images/team2.jpeg";
// import teamImg3 from "../assets/images/team3.jpeg";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  const coreValues = [
    {
      id: 1,
      title: "Innovation",
      description:
        "We are constantly exploring new ideas and pushing the boundaries of what's possible. We pride ourselves on delivering forward-thinking solutions that meet your evolving needs.",
    },
    {
      id: 2,
      title: "Collaboration",
      description:
        "We believe in building strong, collaborative relationships with our clients. By understanding your unique challenges, we can craft solutions that work for you.",
    },
    {
      id: 3,
      title: "Excellence",
      description:
        "Quality is non-negotiable. We focus on delivering the highest standards of work in everything we do, ensuring that the solutions we provide have a meaningful, positive impact.",
    },
    {
      id: 4,
      title: "Integrity",
      description:
        "We approach every project with honesty, transparency, and respect. Our clients trust us to deliver on our promises and act with integrity in all our dealings.",
    },
    {
      id: 5,
      title: "Customer-Centric",
      description:
        "Your needs come first. We are dedicated to putting our clients’ success at the forefront of our work and ensuring that every solution aligns with their goals.",
    },
  ];

  return (
    <>
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto text-black">
                Innovating Your Future with Technology
              </h2>
              <p className="desc">
                At ALPHENEX INFORMATIC, we believe that technology is a powerful
                tool for change, and we’re here to help businesses navigate and
                thrive in the digital world. Our team of talented professionals
                is committed to turning your ideas into innovative solutions
                that drive growth, enhance efficiency, and deliver real results.
                We’re not just another tech company—we’re a partner that
                understands your challenges and is passionate about finding the
                right solutions to help you succeed.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="mt-[2rem] text-black">
          {/* <h2 className="text-xl font-medium">Where AI Meets Integrity</h2> */}
          <p className="desc mt-2">
            Since we started, we’ve been driven by a single goal: to provide
            tailored digital solutions that solve real problems. Whether you’re
            a startup or an established enterprise, we take a collaborative
            approach to design, develop, and implement solutions that push
            boundaries and deliver lasting impact.
          </p>
        </div>
        <div className="mt-[3rem]">
          <h2 data-aos="fade-up" className="heading-2 text-center text-black">
            Our Mission: Empowering Businesses Through Cutting-Edge Technology
          </h2>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-up"
              className="flex h-full items-center md:items-start flex-col gap-7"
            >
              <p className="desc">
                At ALPHENEX INFORMATIC, our mission is clear: to help businesses
                transform their operations and succeed in an ever-changing
                digital landscape. We see technology as a catalyst for growth,
                and our solutions are designed to drive efficiency, enhance
                customer experiences, and improve profitability. Our team of
                experts works closely with you to understand your specific goals
                and challenges, creating customized solutions that support your
                vision and objectives.
                <br />
                <br />
                We aim to build lasting, meaningful relationships with our
                clients. Our success is measured by your success, and we are
                dedicated to delivering results that make a difference.
              </p>
            </div>
            <div data-aos="fade-up" className="h-full">
              <img
                loading="lazy"
                src={aboutImg2}
                className="object-cover w-full max-h-[20rem] rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <TrustWorthySection />
      <section className="wrapper py-[3rem] bg-secodary">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="h-full">
            <img
              loading="lazy"
              src={aboutImg3}
              className="object-cover h-full w-full max-h-[46rem] rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center lg:items-start flex-col gap-7"
          >
            <h2 data-aos="fade-up" className="heading-2 text-start text-black">
              Our Core Values: Driving Every Decision We Make{" "}
            </h2>
            <p className="desc">
              At the heart of everything we do are the values that shape our
              work and guide our approach. We are a company built on trust,
              collaboration, and a commitment to excellence. These values define
              how we interact with our clients, partners, and each other.
            </p>
            <div>
              <ul>
                {coreValues.map((obj) => (
                  <li>
                    <h1 className="text-xl font-medium">{obj.title}:</h1>
                    <p className="desc mt-2">{obj.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      {/* <section className="text-white wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="Our Expert Team" />
              <h2 className="heading-2">Meet Our Team</h2>
              <p className="desc">
                At <b>ALPHENEX INFORMATIC</b>, our team is at the heart of every
                solution we provide. Combining expertise, innovation, and a deep
                commitment to client success, our professionals are dedicated to
                transforming complex challenges into seamless experiences. From
                developers and designers to strategists and support specialists,
                each team member brings unique skills that drive our mission
                forward. Get to know the people powering the next generation of
                digital solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="h-full w-full">
            <div
              className={`h-full grid gap-3 grid-cols-4
            `}
            >
              {images.map((img, id) => (
                <div
                  className={`
                    relative w-full h-full aspect-[4/5] rounded-xl overflow-hidden
                    ${
                      selectedImg === id
                        ? "col-span-2 shadow-large shadow-primary/50"
                        : "col-span-1"
                    }
                  `}
                  key={id}
                >
                  {selectedImg !== id && (
                    <div className="absolute top-0 w-full h-full bg-secondary/80 z-0"></div>
                  )}
                  <img
                    loading="lazy"
                    src={img}
                    className="-z-10 h-full w-full object-cover"
                    alt=""
                  />
                  {selectedImg === id && (
                    <div className="rounded-lg absolute p-2 bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-tertiary text-center text-white">
                      <h6 className="font-medium">Liam Smith</h6>
                      <p className="text-primary text-[.8rem]">
                        CEO & Co-Founder
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
