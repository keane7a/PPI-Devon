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
        <div className="flex flex-col w-full items-center">        
            {committees.map((committee) => {
                return (
                    <>
                        <ProfileCard profile={committee} />
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
        <div className="w-full p-4 h-screen">
            <h1 className="font-bold text-xl md:text-6xl w-full text-center pb-4">Our Team</h1>
            <div className="rounded-lg bg-gray-100">

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





