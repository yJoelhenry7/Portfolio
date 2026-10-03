const education = [
  { school: "Andhra University", degree: "Master of Business Administration", date: "July 2025 - June 2027" },
  { school: "Vishnu Institute of Technology (Autonomous)", degree: "B.Tech, Artificial Intelligence and Data Science", date: "June 2020 - April 2024" },
  { school: "Sri Chaitanya College of Education", degree: "Intermediate, MPC", date: "June 2018 - March 2020" },
]

const certifications = [
  "JavaScript (Basic) Certificate",
  "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
  "Full Stack Web Application Development with Node JS",
  "LangChain",
  "PCAP: Programming Essentials in Python",
]

const Education = () => {
  return (
    <div className="flex flex-col items-center text-white py-8 px-4">
      <h1 className="text-4xl m-4 font-bold" id="education">Education &amp; Certifications</h1>
      <div className="flex justify-center flex-wrap gap-8 w-full max-w-5xl">
        <div className="expcard border-blueish border p-6 rounded-xl flex-1 min-w-[18rem]">
          <h2 className="text-2xl font-semibold opacity-70 mb-4">Education</h2>
          {education.map((e, i) => (
            <div key={i} className="mb-4 opacity-60">
              <p className="font-bold">{e.school}</p>
              <p className="text-sm">{e.degree}</p>
              <p className="text-xs">{e.date}</p>
            </div>
          ))}
        </div>
        <div className="expcard border-blueish border p-6 rounded-xl flex-1 min-w-[18rem]">
          <h2 className="text-2xl font-semibold opacity-70 mb-4">Certifications</h2>
          <ul className="list-disc pl-5 opacity-60 text-sm space-y-2">
            {certifications.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education
