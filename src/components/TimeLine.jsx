import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './cards/ExperienceCard'
import oclogo from '../assets/Images/oclogo.jpeg'
import studyowllogo from '../assets/Images/studyowllogo.jpeg'

const TimeLine = () => {
    const experiences = [
        {
          id: 0,
          img: oclogo,
          role: "Software Engineer",
          company: "One Convergence",
          date: "June 2024 - Present",
          desc: "Worked across 5 projects: customized WordPress sites with PHP/HTML/CSS and built web scraping & Cypress E2E testing for GoodDoc; built React/Next.js components with Shadcn UI, FastAPI backend, and Svelte features for Dkubex; developed a responsive Next.js+TypeScript UI integrated with FastAPI for an AI Agentic platform; built Next.js components with BetterAuth RBAC and TanStack Query API integrations for Kasu.AI; developed Go backend APIs, deployed microservices with Kubernetes/Helm/RayServe, and implemented IaC with Terraform & AWS for DocMind.",
          skills: [
            "React js","Next js","TypeScript","Tailwind CSS","ShadCN","Svelte","Redux Toolkit","TanStack Query","Storybook","FastAPI","Go","Wordpress","PHP","Scrapy","Playwright","Cypress","BetterAuth","Docker","Kubernetes","Terraform","AWS"
          ],
          doc: "",
        },
        {
          id: 1,
          img: oclogo,
          role: "Software Engineer Intern",
          company: "One Convergence",
          date: "April 2023 - May 2024",
          desc: "Worked on 2 projects: customized a WordPress site with PHP, HTML, CSS, jQuery and MySQL backend for GPTfu, while also contributing React components to the UI; built a full-stack Flask web app for HappiCards with Jinja2, Bootstrap, PostgreSQL, Docker, and AWS (EC2, S3), and optimized performance using Google Lighthouse and BrowserStack.",
          skills: [
            "Wordpress","PHP","HTML","CSS","jQuery","Bootstrap","MySQL","React js","Python","Flask","Jinja2","PostgreSQL","Docker","AWS","JavaScript"
          ],
          doc: "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/One%20Convergence%20Internship%20Certficate.jpg?alt=media&token=cffeb954-1f5b-45c8-bda1-63be4d7e7fd3",
        },
        {
          id: 1,
          img: studyowllogo,
          role: "FullStack Intern",
          company: "StudyOwl ",
          date: "Sept 2022 - Nov 2022",
          desc: "Worked on Frontend for an Ecommerce website using EJS and Implemented Cart Functionality  ",
          skills: [
            "Node JS" ,"Express JS","Embedded JavaScript (EJS)" ,"Cloud Firestore","Postman API","Jest" 
          ],
          doc: "https://firebasestorage.googleapis.com/v0/b/portfolio-26e36.appspot.com/o/Full%20Stack%20Internship%20Certificate.jpg?alt=media&token=00e9be8d-d60b-4b8e-a800-b33615875912",
        },

      ];
  return (
      <Timeline align="left">
        {experiences.map((experience,index) => (
            <TimelineItem key={index}>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                </TimelineSeparator>
                <TimelineContent  sx={{ py: '12px', px: 2 }}>
                    <ExperienceCard experience={experience}/>
                </TimelineContent>
            </TimelineItem>
        ))}
       </Timeline>
  )
}

export default TimeLine
