import Image from "next/image";
import { Accordion } from "@/app/ui/accordion";
import { ProfileCard } from "@/app/ui/cards";
import { Profile, Content } from "@/app/about/ourteam/types";


const contents: Content[] = [
    {year: 2023, 
    committees: 
    [
        {
            image: "", 
            name: "John", 
            role: "President", 
            course: "BSc English", 
            description: "Hello world, this is a description of the person. you can say anyting",
            linkedin: "", 

        }, 
        {
            image: "", 
            name: "Doe", 
            role: "Vice President", 
            course: "BSc History", 
            description: "Hello world, this is a description of the person. you can say anyting",
            linkedin: "", 
            instagram: "", 
            facebook: "https://www.facebook.com/groups/171899451981/", 
        }, 
        {
            image: "", 
            name: "John", 
            role: "President", 
            course: "BSc English", 
            description: "Hello world, this is a description of the person. you can say anyting",
            linkedin: "", 
            instagram: "", 
            facebook: "https://www.facebook.com/groups/171899451981/", 
        }, 
        {
            image: "", 
            name: "Doe", 
            role: "Vice President", 
            course: "BSc History", 
            description: "Hello world, this is a description of the person. you can say anyting",
            linkedin: "", 
            instagram: "", 
            facebook: "https://www.facebook.com/groups/171899451981/", 
        }, 
        {
            image: "", 
            name: "John", 
            role: "President", 
            course: "BSc English", 
            description: "Hello world, this is a description of the person. you can say anyting",
            linkedin: "", 

        }, 
        {
            image: "", 
            name: "Doe", 
            role: "Vice President", 
            course: "BSc History", 
            description: "Hello world, this is a description of the person. you can say anyting",
            linkedin: "", 
            instagram: "", 
            facebook: "https://www.facebook.com/groups/171899451981/", 
        }, 
        {
            image: "", 
            name: "John", 
            role: "President", 
            course: "BSc English", 
            description: "Hello world, this is a description of the person. you can say anyting",
            linkedin: "", 
            instagram: "", 
            facebook: "https://www.facebook.com/groups/171899451981/", 
        }, 
        {
            image: "", 
            name: "Doe", 
            role: "Vice President", 
            course: "BSc History", 
            description: "Hello world, this is a description of the person. you can say anyting",
            linkedin: "", 
            instagram: "", 
            facebook: "https://www.facebook.com/groups/171899451981/", 
        }, 
    ]
    },
    {year: 2024, 
        committees: 
        [
            {
                image: "", 
                name: "John", 
                role: "President", 
                course: "BSc English", 
                description: "Hello world, this is a description of the person. you can say anyting",
                linkedin: "", 
                instagram: "", 
                facebook: "", 
            }, 
            {
                image: "", 
                name: "Doe", 
                role: "Vice President", 
                course: "BSc History", 
                description: "Hello world, this is a description of the person. you can say anyting",
                linkedin: "", 
                instagram: "", 
                facebook: "", 
            }, 
        ]
        },

]

function ProfileList({committees}: {committees: Profile[]}) {
    return (
        <>
        <div className="flex flex-wrap flex-col md:flex-row w-full items-center py-8">        
            {committees.map((committee) => {
                return (
                    <>
                        <ProfileCard profile={committee}/>
                    </>
                );
            })}
        </div>
        </>
    )
}

export default async function Page() {

    return (
        <>
        <div className="w-full items-center">
                <h1 className="m-auto font-bold text-xl md:text-6xl w-full text-center mb-4">Our Team</h1>
                <p className="text-l text-justify md:text-center w-3/4 md:w-1/2 md:py-4 m-auto" >
                    Being aware of the committees in your organisation is crucial to 
                    comprehending the responsibilities they play in directing the organisation's 
                    leadership structure. This data makes it easier to collaborate and communicate 
                    effectively, which guarantees that efforts are in line with strategic goals.
                </p>
            <div className="rounded-lg bg-gray-100 mt-8">
                {contents.map((content) => {         
                    var committees = <ProfileList committees={content.committees} /> 
                    return (
                        <>
                        <Accordion title={`${content.year} - ${content.year + 1}`} content={committees} />
                        </>
                    );
                })}
            </div>
        </div>
        
        </>
    );
}





