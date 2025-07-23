import ProgramPage from "../components/ProgramPage";

const pageData = {
  title: "SAE Development",
  tagline: "Building the next generation of engineers.",
  images: [
    '/images/dev/dev-poster.jpg',
    '/images/dev/dev-kids.jpg',
    '/images/dev/dev-class.jpg',
    '/images/dev/dev-baja.jpg',
    '/images/dev/dev-usb.jpg',
  ],
  contactEmail: "TAMU.development@gmail.com",
  mission: "Our mission is to provide a comprehensive introduction to engineering principles and practices, fostering the next generation of innovators and problem solvers.",
  description: "The SAE Development Program is the entry point for new and aspiring members. It is designed to equip underclassmen with the fundamental skills, software knowledge, and hands-on experience necessary to excel on our competitive project teams. Through workshops on CAD and CAM, tutorials on machining and welding, and mentorship from senior members, the Development Program builds a strong foundation for a successful future in engineering."
};

const DevelopmentPage = () => {
  return (
    <ProgramPage
        title={pageData.title}
        tagline={pageData.tagline}
        description={pageData.description}
        mission={pageData.mission}
        contactEmail={pageData.contactEmail}
        images={pageData.images}
    />
  );
};

export default DevelopmentPage;