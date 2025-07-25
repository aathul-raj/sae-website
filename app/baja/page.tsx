import ProgramPage from "../components/ProgramPage";

const pageData = {
  title: "Baja SAE",
  tagline: "Engineered to conquer the toughest terrain.",
  description: "The Baja SAE team thrives on building vehicles that can withstand the most punishing off-road conditions imaginable. Each year, we design and fabricate a single-seat, all-terrain vehicle from the ground up. Our members specialize in robust chassis design, long-travel suspension systems, and custom drivetrain engineering.",
  
  mission: "To act as a vehicle for self-motivated engineering students to extend their learning in a practical manner outside of the classroom and to develop the skills needed to become contributing members and leaders in the engineering industry.",
  competitionEvents: [
    { name: 'Endurance', points: 400 },
    { name: 'Design Presentation', points: 150 },
    { name: 'Cost Report', points: 100 },
    { name: 'Acceleration', points: 75 },
    { name: 'Maneuverability', points: 75 },
    { name: 'Hill Climb / Sled Pull', points: 75 },
    { name: 'Suspension', points: 75 },
    { name: 'Sales Presentation', points: 50 },
  ],
  contactEmail: "baja.sae.tamu@gmail.com",
  subTeams: [
    'Aerodynamics',
    'Chassis',
    'Powertrain',
    'Suspension',
  ],
  images: [
    '/images/baja/showcase/baja-sliding.jpg',
    '/images/baja/showcase/baja-good.jpg',
    '/images/baja/showcase/baja-drift.jpg',
    '/images/baja/showcase/baja-campus.jpg',
    '/images/baja/showcase/baja-comp-dirt.jpg',
    '/images/baja/showcase/baja-tuff.jpg',
  ],
  history: [
    {
      year: '2024-2025',
      achievement: '',
      details: '',
      
    },
    {
      year: '2023-2024',
      achievement: '',
      details: '',
      carImage: '/images/baja/showcase/history/24.jpeg'
    },
    {
      year: '2022-2023',
      achievement: '',
      details: '',
      carImage: '/images/baja/showcase/history/23.jpeg'
    },
    {
      year: '2021-2022',
      achievement: '',
      details: '',
      carImage: '/images/baja/showcase/history/22.jpg'
    },
    {
      year: '2020-2021',
      achievement: 'Top 10 Overall in Virtual & Validation Events',
      details: 'Placed 8th overall out of 156 teams in the Virtual Knowledge Event and 3rd among all non-capstone projects at Texas A&M.',
      carImage: '/images/baja/showcase/history/21.jpg'
    },
    {
      year: '2019-2020',
      achievement: 'Pioneered 4WD Design & Top 20 Virtual Finish',
      details: 'Amidst the COVID-19 pandemic, the team pivoted to a 4WD vehicle and secured a team-record 16th place in the virtual competition.',
      carImage: '/images/baja/showcase/history/20.png'
    },
    {
      year: '2018-2019',
      achievement: 'Strong Showing in Static Events',
      details: 'Placed 52nd overall in California, with impressive results including 9th in Cost Report and 16th in Sales Presentation.',
      carImage: '/images/baja/showcase/history/19.jpg'
    },
    {
      year: '2017-2018',
      achievement: 'Inaugural Year Success',
      details: "In its first-ever competition, the team placed 33rd overall in Kansas, highlighted by a 7th place finish in the Maneuverability event.",
      carImage: '/images/baja/showcase/history/18.jpeg'
    }
  ]
};


const BajaPage = () => {
  return (
    <ProgramPage
      title={pageData.title}
      tagline={pageData.tagline}
      description={pageData.description}
      images={pageData.images}
      history={pageData.history}
      mission={pageData.mission}
      competitionEvents={pageData.competitionEvents}
      contactEmail={pageData.contactEmail}
    />
  );
};

export default BajaPage;