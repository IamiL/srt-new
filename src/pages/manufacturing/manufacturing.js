import ManufacturingBlock from "@/components/manufacturing/block/block";
import Background3 from "@/components/background/3/background";

export default function Manufacturing({enLan}) {
    return (
        <>
            <main>
                <ManufacturingBlock enLan={enLan}/>
            </main>
            <Background3/>
        </>
    );
}