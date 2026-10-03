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
          role: "Full Stack Developer",
          company: "Mondee",
          date: "May 2026 - Present",
          points: [
            "Miraee: building scalable full-stack applications with React and FastAPI.",
            "Clean architecture with asynchronous APIs and optimized database operations.",
            "JWT authentication with Google/Microsoft SSO.",
          ],
          skills: [
            "React js","FastAPI","Python","MongoDB","Redis","TanStack Query","Zustand","React Hook Form","Zod","JWT","Google/Microsoft SSO"
          ],
          doc: "",
        },
        {
          id: 1,
          img: oclogo,
          role: "Software Engineer",
          company: "One Convergence",
          date: "June 2024 - April 2026",
          points: [
            "AskX: architected a 3-service microservices platform for AI-powered HR automation using Python, FastAPI and Django REST Framework.",
            "Built a multi-agent AI system with LLM orchestration, RAG and FAISS vector search for HR policy queries.",
            "Designed a Google Chat/Slack/Teams abstraction layer that cut code duplication by 81%.",
            "GoodDoc: customized a WordPress site (PHP/HTML/CSS), built Scrapy + Playwright web scraping and Cypress E2E tests.",
          ],
          skills: [
            "Python","FastAPI","Django","DRF","LLM Orchestration","RAG","FAISS","Wordpress","PHP","Scrapy","Playwright","Cypress"
          ],
          doc: "",
        },
        {
          id: 2,
          role: "Software Engineer",
          company: "DKube",
          date: "June 2024 - April 2026",
          points: [
            "Dkubex: built React/Next.js components with Shadcn UI and Storybook, refactored a Next.js app, added a FastAPI backend and Playwright UI tests, and extended a legacy Svelte project.",
            "AI Agentic platform: developed a responsive Next.js + TypeScript UI integrated with FastAPI agent actions.",
            "Kasu.AI: built Next.js components with BetterAuth RBAC and TanStack Query API integrations.",
            "DocMind: Go backend APIs, microservices on RayServe/Kubernetes/Helm, ML-based OCR accuracy improvements, and IaC with Terraform & AWS (EC2, Lambda, S3, CloudFormation, EventBridge).",
          ],
          skills: [
            "React js","Next js","TypeScript","Tailwind CSS","ShadCN","Svelte","Redux Toolkit","TanStack Query","Storybook","FastAPI","Go","Playwright","BetterAuth","Docker","Kubernetes","Helm","RayServe","Terraform","AWS"
          ],
          doc: "",
        },
        {
          id: 3,
          img: oclogo,
          role: "Software Engineer Intern",
          company: "One Convergence",
          date: "April 2023 - May 2024",
          points: [
            "GPTfu: customized a WordPress site (PHP, HTML, CSS, jQuery, MySQL) and contributed React components.",
            "HappiCards: built a full-stack Flask app with Jinja2, Bootstrap and PostgreSQL, deployed with Docker on AWS (EC2, S3).",
            "Optimized performance using Google Lighthouse, PageSpeed Insights and BrowserStack.",
          ],
          skills: [
            "Wordpress","PHP","HTML","CSS","jQuery","Bootstrap","MySQL","React js","Python","Flask","Jinja2","PostgreSQL","Docker","AWS","JavaScript"
          ],
          doc: "/oneconvergence-cert.jpg",
        },
        {
          id: 4,
          img: studyowllogo,
          role: "FullStack Intern",
          company: "StudyOwl ",
          date: "Sept 2022 - Nov 2022",
          points: [
            "Developed an e-commerce application using EJS, Express.js and Node.js.",
            "Used Firebase as the backend-as-a-service for data storage and authentication.",
            "Implemented cart functionality.",
          ],
          skills: [
            "Node JS","Express JS","Embedded JavaScript (EJS)","Firebase","PostgreSQL","Jest","Supertest","Husky","Postman API"
          ],
          doc: "/studyowl-cert.png",
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
