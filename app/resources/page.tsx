import { Accordion } from "@/app/ui/accordion";
import { faqs } from "@/app/resources/data";



export default async function Page() {

    return (
        <>
        <h1 className="font-bold text-xl md:text-6xl w-full text-center">FAQs</h1>
        <div className="rounded-lg bg-gray-100 -100 mt-8 m-4 md:mx-14">
                {faqs.map((faq) => {        
                    return (
                        <>
                        <Accordion title={faq.question} content={faq.answer} />
                        </>
                    );
                })}
            </div>
        </>
    );
}

// [#faf0e6]