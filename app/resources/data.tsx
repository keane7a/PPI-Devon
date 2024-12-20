
function Link({text, link}: {text: string, link:string})  {
    return (<>
    <a href={link} className="text-blue-600 dark:text-blue-500 hover:underline">{text}</a>
    </>)
}

export var resources = [
    {
        name: "Guidebook 2024", 
        link: "",
    }, 
    {
        name: "Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) 2024", 
        link: "",
    },
    {
        name: "Guidebook 2023", 
        link: "",
    }, 
    {
        name: "Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) 2023", 
        link: "",
    },
]


export var faqs = [
    {
        question: "How do I get to Exeter from anywhere around UK?", 
        answer: 
        <>
        "Once you arrive in the UK there are several public transportations you can choose from such as trains or buses. You can easily book your travels from Trainline or National Express. More information can be found <Link text="here" link="https://www.exeter.ac.uk/students/international/newstudents/planningyourtraveltouniversity/"/>
        </>,
        
    },
    {
        question: "How do I get to Uni from my acommodation", 
        answer: 
        <>
        You can either walk (most acommodation will take 5-30 minutes to go to uni) or you can take the bus with a service UNI. More information can be found here <Link text="here" link="https://www.stagecoachbus.com/promos-and-offers/south-west/getting-to-exeter-university-by-bus"/>
        </>,
    },
    {
        question: "What options do I have for acommodation?", 
        answer: <>
        "There are many! Year 1 students mostly stay on university acommodation located around campus. More information can be found here <Link text="here" link="https://www.exeter.ac.uk/study/accommodation/"/>
        </>
    },
    {
        question: "hello world", 
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque mollitia quibusdam, voluptatem quos laboriosam dicta ab culpa illum. Beatae illo dolor ratione dicta, nesciunt maxime nobis quaerat doloribus velit?"
    },
    {
        question: "hello world", 
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque mollitia quibusdam, voluptatem quos laboriosam dicta ab culpa illum. Beatae illo dolor ratione dicta, nesciunt maxime nobis quaerat doloribus velit?"
    },
]
