import Image from "next/image";
import { Accordion } from "@/app/ui/accordion";
import { ProfileCard } from "@/app/ui/cards";
import { Profile } from "@/app/about/ourteam/types";

const contents = [
    {year: 2023, 
    committee: 
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

export default async function Page() {

    return (
        <>
        <div className="w-full p-4">
            <h1 className="font-bold text-xl md:text-6xl w-full text-center pb-4">Our Team</h1>
            <div className=" p-4 rounded-lg bg-gray-100">
                {/* <Accordion title="title 1" content={<ProfileCard />}/>
                <Accordion title="title 2" content={<ProfileCard />}/>
                <Accordion title="title 3" content={<ProfileCard />}/> */}
            </div>
        </div>
        
        </>
    );
}




function PorfileList(
    {
        image, 
        name, 
        role, 
        course, 
        description,
        linkedin, 
        instagram, 
        facebook, 
    }: Profile) {
    return (
        <>
        hello world
        </>
    )
}
