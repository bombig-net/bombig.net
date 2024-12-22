import Marquee from "@/components/elements/Marquee";
import Image from "next/image";
import Section from "@/components/elements/Section";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/elements/Card";

const reviews = [
    {
        logoUrl: "/portfolio/dummy.png",
        company: "Dynamic Solutions GmbH",
        portraitUrl: "/portfolio/1.png",
        name: "Lena Schmidt",
        position: "Geschäftsführerin",
        text: "Ich bin sehr zufrieden mit der Arbeit von bombig. Die Zusammenarbeit war sehr angenehm und professionell. Ich kann bombig nur weiterempfehlen.",
    },
    {
        logoUrl: "/portfolio/dummy.png",
        company: "NextGen Creatives",
        portraitUrl: "/portfolio/2.png",
        name: "Markus Meier",
        position: "Marketing Manager",
        text: "bombig hat unsere Website auf ein neues Level gebracht. Kreativ, zuverlässig und immer lösungsorientiert. Großartige Arbeit!",
    },
    {
        logoUrl: "/portfolio/dummy.png",
        company: "TechBoost Labs",
        portraitUrl: "/portfolio/3.png",
        name: "Julia Weber",
        position: "Inhaberin",
        text: "Die Zusammenarbeit mit bombig war einfach spitze. Unsere Anforderungen wurden perfekt umgesetzt und sogar übertroffen.",
    },
    {
        logoUrl: "/portfolio/dummy.png",
        company: "DesignWave Studio",
        portraitUrl: "/portfolio/4.png",
        name: "Thomas Klein",
        position: "Produktmanager",
        text: "Sehr beeindruckt von der Professionalität und Kreativität des Teams. Unsere Website ist genau so, wie wir sie uns vorgestellt haben.",
    },
    {
        logoUrl: "/portfolio/dummy.png",
        company: "Innovate Digital",
        portraitUrl: "/portfolio/5.png",
        name: "Sarah Hoffmann",
        position: "Projektleiterin",
        text: "bombig hat uns bei unserem Rebranding unglaublich unterstützt. Die Ergebnisse sprechen für sich.",
    },
    {
        logoUrl: "/portfolio/dummy.png",
        company: "Visionary Works",
        portraitUrl: "/portfolio/6.png",
        name: "Jonas Fischer",
        position: "CEO",
        text: "Die Zusammenarbeit war nicht nur produktiv, sondern hat auch Spaß gemacht. Sehr empfehlenswert!",
    },
    {
        logoUrl: "/portfolio/dummy.png",
        company: "Bright Concepts",
        portraitUrl: "/portfolio/7.png",
        name: "Anna Müller",
        position: "Gründerin",
        text: "bombig hat unser Projekt in Rekordzeit umgesetzt und dabei all unsere Erwartungen übertroffen. Vielen Dank!",
    },
    {
        logoUrl: "/portfolio/dummy.png",
        company: "Pioneer Web Group",
        portraitUrl: "/portfolio/8.png",
        name: "Michael Becker",
        position: "COO",
        text: "Von Anfang bis Ende eine hervorragende Zusammenarbeit. bombig hat ein tolles Team und wir sind sehr zufrieden mit dem Ergebnis.",
    },
    {
        logoUrl: "/portfolio/dummy.png",
        company: "Elegant Web Design",
        portraitUrl: "/portfolio/9.png",
        name: "Sophie Wagner",
        position: "Art Director",
        text: "Die Designs von bombig sind erstklassig. Wir haben viele positive Rückmeldungen zu unserer neuen Website erhalten.",
    },
    {
        logoUrl: "/portfolio/dummy.png",
        company: "Smart Solutions Co.",
        portraitUrl: "/portfolio/10.png",
        name: "Philipp Schneider",
        position: "E-Commerce Manager",
        text: "bombig hat eine großartige Arbeit geleistet. Unsere Verkaufszahlen sind dank der neuen Website deutlich gestiegen. Top-Service!",
    },
];


export default async function Testimonials() {

    return (
        <Section className="relative flex flex-col justify-center items-center pt-0 overflow-hidden">
            <h2 className="z-10 lg:mb-16 font-euclid text-center text-jordy-100 text-lg lg:text-3xl">Diese Erfahrung haben auch unsere Klienten gemacht</h2>
            <Marquee className="[--duration:100s]">
                {reviews.map((review) => (
                    <Card key={review.name} className="flex flex-col justify-between items-start m-0 p-0 w-96 h-auto min-h-96">
                        <CardHeader>
                            <Image className="bg-orange-300 mb-8 w-48 h-16" src={review.logoUrl} alt={review.company} width={80} height={80} />
                            <div className="flex flex-row">
                                <div>
                                    <Image className="bg-orange-300 rounded-full" src={review.portraitUrl} alt={review.name} width={80} height={80} />
                                </div>
                                <div className="flex flex-col justify-center pl-4">
                                    <CardTitle>{review.name}</CardTitle>
                                    <CardDescription>{review.position}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>{review.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </Marquee>
            <div className="left-0 absolute inset-y-0 bg-gradient-to-r from-jordy-950 via-20% via-jordy-950 to-transparent w-1/12 pointer-events-none"></div>
            <div className="right-0 absolute inset-y-0 bg-gradient-to-l from-jordy-950 via-20% via-jordy-950 to-transparent w-1/12 pointer-events-none"></div>
        </Section>
    );
}
