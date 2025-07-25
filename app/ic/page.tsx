import ProgramPage from "../components/ProgramPage";

const pageData = {
  title: "Formula Internal Combustion",
  tagline: "Where precision engineering meets raw power.",

  description: "The FSAE IC program at Texas A&M offers engineering students the opportunity to be part of a team that designs, builds, and tests a formula-style race car as part of the Senior Capstone Design course. This enables students to thoroughly learn and apply the principles of design, project management, and business towards engineering a competitive vehicle. Our program has won 8 championships since our inaugral year in 1999.",

  mission: "To develop exceptional engineers through innovative formula race car design and competition. Each year, our senior engineering students start with a clean slate, fostering creative freedom and unique problem-solving that prepares them for industry leadership while pursuing excellence in Formula SAE competition.",
  competitionEvents: [
    { name: 'Design', points: 150 },
    { name: 'Autocross', points: 125 },
    { name: 'Cost', points: 100 },
    { name: 'Acceleration', points: 100 },
    { name: 'Efficiency', points: 100 },
    { name: 'Skid-Pad', points: 75 },
    { name: 'Business Presentation', points: 75 },
    { name: 'Endurance', points: 275 },
  ],
  contactEmail: "tamufsaebusiness@gmail.com",
  subTeams: [
    'Aerodynamics',
    'Chassis',
    'Electrical',
    'Powertrain',
    'Suspension',
  ],
  images: [
    '/images/ic/showcase/ic-comp-celebration.jpg',
    '/images/ic/showcase/ic-smoke.jpg',
    '/images/ic/showcase/ic-comp.jpg',
    '/images/ic/showcase/ic-rellis-close.jpg',
    '/images/ic/showcase/ic-testing.jpg',
    '/images/ic/showcase/ic-turn.jpg'
  ],

  history: [
    {
      year: '2024-2025',
      achievement: '2nd Place Overall at FSAE Michigan',
      details: 'A top-tier performance with strong results across all categories, including 4th in Endurance and 8th in Design.',
      
    },
    {
      year: '2023-2024',
      achievement: '1st Place in Autocross',
      details: 'Strong autocross performance but faced endurance challenges, finishing 27th overall.',
      carImage: '/images/ic/showcase/history/24.jpeg'
    },
    {
      year: '2022-2023',
      achievement: '5th Place in Autocross',
      details: 'Continued competitive development with focus on reliability improvements.',
      carImage: '/images/ic/showcase/history/23.jpg'
    },
    {
      year: '2021-2022',
      achievement: '1st Place in Autocross',
      details: 'Dominated the Autocross event with a lightning-fast time, finishing 27th overall at the Michigan competition.',
      carImage: '/images/ic/showcase/history/22.jpg'
    },
    {
      year: '2020-2021',
      achievement: 'National Champions & Record-Breaking Performance',
      details: 'Swept the competition in Nevada, winning Overall, Endurance, Autocross, and Skid Pad, while setting a new national points record for an IC car.',
      carImage: '/images/ic/showcase/history/21.jpg'
    },
    {
      year: '2019-2020',
      achievement: '',
      details: 'Season impacted by global events, focused on design development.',
      carImage: '/images/ic/showcase/history/20.jpg'
    },
    {
      year: '2018-2019',
      achievement: 'Top 10 Overall Finish in Lincoln',
      details: 'Placed 10th out of 76 teams, with notable results including 8th in Endurance and 9th in Fuel Efficiency.',
      carImage: '/images/ic/showcase/history/19.jpeg'
    },
    {
      year: '2017-2018',
      achievement: 'National Champions Again',
      details: 'Back-to-back championship with 1st in Endurance and 2nd in Autocross.',
      carImage: '/images/ic/showcase/history/18.png'
      
    },
    {
      year: '2016-2017',
      achievement: 'National Champions',
      details: 'Championship victory with 1st in Endurance and Fuel Efficiency, 2nd in Design.',
      carImage: '/images/ic/showcase/history/17.jpg'
    },
    {
      year: '2015-2016',
      achievement: '14th Overall with Strong Dynamic Performance',
      details: '2nd place finishes in Acceleration and Autocross demonstrated competitive speed.'
    },
    {
      year: '2010-2011',
      achievement: 'National Champions',
      details: ''
    },
    {
      year: '2008-2009',
      achievement: 'National Champions',
      details: ''
    },
    {
      year: '2006-2007',
      achievement: 'Back-to-Back National Champions',
      details: ''
    },
    {
      year: '2005-2006',
      achievement: 'National Champions',
      details: ''
    },

  ]
};

const FormulaCombustionPage = () => {
  return (
    <ProgramPage
      title={pageData.title}
      tagline={pageData.tagline}
      description={pageData.description}
      mission={pageData.mission}
      competitionEvents={pageData.competitionEvents}
      contactEmail={pageData.contactEmail}
      images={pageData.images}
      history={pageData.history}
      subTeams={pageData.subTeams}
    />
  );
};

export default FormulaCombustionPage;