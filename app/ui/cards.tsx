'use client';

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram} from "react-icons/fa";
import { Profile } from "@/app/about/ourteam/types";
import { Event } from "@/app/events/types";

export function EventCard({event}: {event: Event}) {
    return (
        <>
        <div className="relative flex flex-col-reverse md:flex-row w-5/6 md:w-4/6 m-4 border border-black rounded-md">
            <div className="flex flex-col basis-3/5 p-4">
            <h2 className="font-bold text-xl">{event.title}</h2>
            <p className="text-justify pr-4">{event.description}</p>
            <p className="pt-4">{event.startTime.toDateString()}</p>
            <p>{`${event.startTime.toTimeString().slice(0,5)} - ${event.endTime.toTimeString().slice(0,5)}`}</p>
            <p className="md:absolute md:bottom-0 pt-4 md:py-4">{event.location} sfs</p>
            </div>
            
            <Image className="basis-2/5 rounded-md" src={event.image} width={1000} height={1000} alt=""/>

        </div>
        </>
    );
}

export function ProfileCard({profile}: {profile: Profile}) {

    const logoStyle = "p-2"

    return (
        <>

        <div className="relative flex flex-col items-center basis-1/2 xl:basis-1/4 mb-4">
            <div>
                <Image className="w-full w-[200px] h-[300px]" src={profile.image} width={500} height={500} alt=""/>
            </div>
            <h2 className="text-lg font-bold">{profile.name}</h2>
            <p className="">{profile.role}</p>
            <p className="">{profile.course}</p>
            
            <div className="flex flex-row">
            
                {"linkedin" in profile ? 
                (
                    <>
                    <Link className={logoStyle} href={profile.linkedin || ""} prefetch={false}>
                        <FaLinkedinIn />
                    </Link>
                    </>
                ):(<></>)}

                {"facebook" in profile ? 
                (
                    <>
                    <Link className={logoStyle} href={profile.facebook || ""} prefetch={false}>
                        <FaFacebookF />
                    </Link>
                    </>
                ):(<></>)}

                {"instagram" in profile ? 
                (
                    <>
                    <Link className={logoStyle} href={profile.instagram || ""} prefetch={false}>
                        <FaInstagram />
                    </Link>
                    </>
                ):(<></>)}
            </div>
        </div>

        </>
    )
}
