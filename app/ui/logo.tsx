import Image from 'next/image'


export default function Logo({className=""}) {
    return (
        <div className={`flex logo w-16 h-16 ${className}`}>
            <Image src="/Logo_PPI_Devon.png" width={200} height={200} alt='PPI Logo'/>
        </div>
    );
}