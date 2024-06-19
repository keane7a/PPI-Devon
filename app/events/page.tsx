import Image from "next/image";
import { EventCard } from "@/app/ui/cards";

export default async function Page() {

    const events = [
        {
            image: "/about/history/img_01.jpg", 
            title: "Event 1", 
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit non possimus itaque blanditiis tempore laboriosam adipisci commodi? Cumque sit expedita aspernatur magnam illo iusto reiciendis molestias, eveniet, necessitatibus eos repellat.",
            location: "Location 1",
            startTime: new Date("2024/04/07 20:00"),
            endTime: new Date("2024/04/07 21:00"),
        },
        {
            image: "/about/history/img_02.jpg",
            title: "Event 2", 
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit non possimus itaque blanditiis tempore laboriosam adipisci commodi? Cumque sit expedita aspernatur magnam illo iusto reiciendis molestias, eveniet, necessitatibus eos repellat.",
            location: "Location 2",
            startTime: new Date("2024/04/07 20:00"),
            endTime: new Date("2024/04/07 21:00"),
        }, 
        {
            image: "/about/history/img_02.jpg", 
            title: "Event 3", 
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit non possimus itaque blanditiis tempore laboriosam adipisci commodi? Cumque sit expedita aspernatur magnam illo iusto reiciendis molestias, eveniet, necessitatibus eos repellat.",
            location: "Location 3",
            startTime: new Date("2024/04/07 20:00"),
            endTime: new Date("2024/04/07 21:00"),
        },

    ]

    return (
        <>
        <h1 className="font-bold text-xl md:text-6xl w-full text-center">Events</h1>
        <div className="flex flex-wrap w-full justify-center">
            {events.map((event) => {
                console.log(event.image)
                return (
                    <EventCard key={event.title} image={event.image} title={event.title} description={event.description} location={event.location} startTime={event.startTime} endTime={event.endTime}/>
                )
            })}
        </div>
       
        </>
    );
}
