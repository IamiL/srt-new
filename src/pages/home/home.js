import Contacts from "@/components/contacts/contacts";
import FirstBlock from "@/components/firstBlock/block/block";
import AdvantagesBlock from "@/components/advantagesBlock/block/block";
import CapabilitiesBlock from "@/components/capabilitiesBlock/block/block";
import IndustrialRobotsBlock from "@/components/industrialRobotsBlock/block/block";
import Background1 from "@/components/background/1/background";

export default function Home({enLan}) {
    return (
        <>
            <main>
                <FirstBlock enLan={enLan}/>
                <AdvantagesBlock enLan={enLan}/>
                <CapabilitiesBlock enLan={enLan}/>
                <IndustrialRobotsBlock enLan={enLan}/>
                <Contacts enLan={enLan}/>
            </main>
            <Background1/>
        </>
    );
}