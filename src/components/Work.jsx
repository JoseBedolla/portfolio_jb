import WorkItem  from "./WorkItem"

const data = [
    {
        date: 'August 2022 - March 2023',
        title: 'Acounting Clerk I',
        company: 'CONFIE',
        description: ['Follow up and camparations of deposits.', 'Chargebacks.']
    },
        {
        date: 'January 2023 - March 2023',
        title: 'Intern Python Backend Developer',
        company: 'Hidrogeno8',
        description: ['Add new features in backend with Django framework.', 'Implement tests in the application.']
    },
    {
        date: 'March 2023 - Present',
        title: 'Application Support Specialist I',
        company: 'CONFIE',
        description: ['Support for internal applications in Tijuana and USA.']
    }   

]

const Work = () => {
    return(
        <div id="work" className="mx-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-5">Work Experience</h1>
            {data.map((item, idx) => (
                <WorkItem 
                key={idx}
                date={item.date}
                title={item.title}
                company={item.company}
                description={item.description}
                />    
            ))}
        </div>
    )
}

export default Work