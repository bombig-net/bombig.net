import Section from "@/components/elements/Section";
import { FaLinkedinIn, FaDribbble, FaInstagram, FaGithub } from "react-icons/fa";

const socialLinks = [
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaDribbble, href: "#", label: "Dribbble" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaGithub, href: "#", label: "GitHub" }
];

export default function MainFooter() {
    const links = {
        schwerpunkte: ["Wirtschaft", "Wissenschaft", "Blog"],
        standorte: ["Bremen", "Freiburg"],
        unternehmen: ["About Us", "Preise", "Blog"],
        rechtliches: ["Impressum", "Datenschutz", "AGBs"]
    };

    return (
        <div>
            <Section className="lg:my-16">
                <div className="gap-16 lg:gap-8 grid grid-cols-2 lg:grid-cols-12">
                    <div className="col-span-2 lg:col-span-4">
                        <h3 className="mb-4 font-euclid text-jordy-100 text-xl">bombig.net</h3>
                        <p className="mb-8 lg:max-w-xs text-jordy-200/70 text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        </p>
                        <div className="flex gap-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="text-jordy-200/70 hover:text-jordy-100 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                    {Object.entries(links).map(([category, items]) => (
                        <div key={category} className="col-span-1 lg:col-span-2">
                            <h4 className="mb-4 font-medium text-jordy-100 capitalize">{category}</h4>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-jordy-200/70 text-sm hover:text-jordy-100 transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
} 