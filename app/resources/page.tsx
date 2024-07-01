import { Accordion } from "@/app/ui/accordion";


var contents = [
    {
        title: "hello world", 
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque mollitia quibusdam, voluptatem quos laboriosam dicta ab culpa illum. Beatae illo dolor ratione dicta, nesciunt maxime nobis quaerat doloribus velit?"
    },
    {
        title: "hello world", 
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque mollitia quibusdam, voluptatem quos laboriosam dicta ab culpa illum. Beatae illo dolor ratione dicta, nesciunt maxime nobis quaerat doloribus velit?"
    },
    {
        title: "hello world", 
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque mollitia quibusdam, voluptatem quos laboriosam dicta ab culpa illum. Beatae illo dolor ratione dicta, nesciunt maxime nobis quaerat doloribus velit?"
    },
    {
        title: "hello world", 
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque mollitia quibusdam, voluptatem quos laboriosam dicta ab culpa illum. Beatae illo dolor ratione dicta, nesciunt maxime nobis quaerat doloribus velit?"
    },
    {
        title: "hello world", 
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque mollitia quibusdam, voluptatem quos laboriosam dicta ab culpa illum. Beatae illo dolor ratione dicta, nesciunt maxime nobis quaerat doloribus velit?"
    },
]


export default async function Page() {

    return (
        <>
        <h1 className="font-bold text-xl md:text-6xl w-full text-center">FAQs</h1>
        <div className="rounded-lg bg-gray-100 -100 mt-8 m-4 md:mx-14">
                {contents.map((content) => {         
                    return (
                        <>
                        <Accordion title={content.title} content={content.content} />
                        </>
                    );
                })}
            </div>
        </>
    );
}

// [#faf0e6]