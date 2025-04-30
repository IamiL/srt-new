import Contacts from "@/components/contacts/contacts";
import FirstBlock from "@/components/firstBlock/block/block";
import AdvantagesBlock from "@/components/advantagesBlock/block/block";
import CapabilitiesBlock from "@/components/capabilitiesBlock/block/block";
import IndustrialRobotsBlock from "@/components/industrialRobotsBlock/block/block";
import Background1 from "@/components/background/1/background";

export default function Home() {
    return (
        <>
            <main>
                <FirstBlock enLan={false}/>
                <AdvantagesBlock enLan={false}/>
                <CapabilitiesBlock enLan={false}/>
                <IndustrialRobotsBlock enLan={false}/>
                <Contacts enLan={false}/>
            </main>
            <Background1/>
        </>
    );
}