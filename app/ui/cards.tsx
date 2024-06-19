'use client';

import Image from "next/image";
import Link from "next/link";
import { Profile } from "@/app/about/ourteam/types";

export function EventCard({
    image, 
    title, 
    description, 
    location,
    startTime, 
    endTime,
}: {
    image: string, 
    title: string, 
    description: string, 
    location: string,
    startTime: Date, 
    endTime: Date, 
}) {
    return (
        <>
        <div className="relative flex flex-col-reverse md:flex-row w-5/6 md:w-4/6 m-4 border border-black rounded-md">
            <div className="flex flex-col basis-3/5 p-4">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="text-justify pr-4">{description}</p>
            <p className="pt-4">{startTime.toDateString()}</p>
            <p>{`${startTime.toTimeString().slice(0,5)} - ${endTime.toTimeString().slice(0,5)}`}</p>
            <p className="md:absolute md:bottom-0 pt-4 md:py-4">{location} sfs</p>
            </div>
            
            <Image className="basis-2/5 rounded-md" src={image} width={1000} height={1000} alt=""/>

        </div>
        </>
    );
}

export function ProfileCard(
    {profile}: {profile: Profile}
) {
    return (
        <>
        <div className="relative flex flex-col">
            <h1>profile cards</h1>
        </div>

        </>
    )
}


// {
//     image, 
//     name, 
//     role, 
//     course, 
//     description,
//     linkedin, 
//     instagram, 
//     facebook, 
// }