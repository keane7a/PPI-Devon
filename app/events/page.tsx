import Image from "next/image";
import { EventCard } from "@/app/ui/cards";
import { events } from "@/app/events/data";

export default async function Page() {
    
    return (
        <>
        <h1 className="font-bold text-xl md:text-6xl w-full text-center">Events</h1>
        <div className="flex flex-wrap w-full justify-center">
            {events.map((event) => {
                console.log(event.image)
                return (
                    <EventCard event={event} />
                )
            })}
        </div>
       
        </>
    );
}