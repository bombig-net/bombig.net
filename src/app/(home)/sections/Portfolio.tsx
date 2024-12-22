import Marquee from "@/components/elements/Marquee";
import Image from "next/image";
import Section from "@/components/elements/Section";
import fs from 'fs';
import path from 'path';

async function getMockups() {
    const mockupsDirectory = path.join(process.cwd(), '/public/portfolio');
    const mockupFiles = fs.readdirSync(mockupsDirectory).filter(file => file.startsWith('webdesign-portfolio-mockup') && file.endsWith('.jpg'));
    return mockupFiles;
}

export default async function Portfolio() {
    const mockups = await getMockups();
    return (
        <Section className="relative flex flex-col justify-center items-center my-0 pt-0 overflow-hidden">
            <Marquee className="[--duration:100s]">
                {mockups.map((mockup) => (
                    <div key={mockup}>
                        <Image
                            src={`/portfolio/${mockup}`}
                            width={807}
                            height={1595}
                            alt="mockup"
                            className="w-auto h-96 lg:h-[36rem]"
                        />
                    </div>
                ))}
            </Marquee>
            <div className="left-0 absolute inset-y-0 bg-gradient-to-r from-jordy-950 via-20% via-jordy-950 to-transparent w-1/12 pointer-events-none"></div>
            <div className="right-0 absolute inset-y-0 bg-gradient-to-l from-jordy-950 via-20% via-jordy-950 to-transparent w-1/12 pointer-events-none"></div>
        </Section>
    );
}
