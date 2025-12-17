import Hero from "@/components/home/Hero";
import WhyMe from "@/components/home/WhyMe";
import Stats from "@/components/home/Stats";
import ServicesPreview from "@/components/home/ServicesPreview";

export default function HomePage() {
    return (
        <>
            <Hero />
            <WhyMe />
            <Stats />
            <ServicesPreview />
        </>
    );
}
