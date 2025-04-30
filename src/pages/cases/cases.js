import AutomationOfTechnologicalProcesses
    from "@/components/automationOfTechnologicalProcesses/automationOfTechnologicalProcesses";
import EquipmentModernization from "@/components/equipmentModernization/block/equipmentModernization";
import Background2 from "@/components/background/2/background";

export default function Cases({enLan}) {
    return (
        <>
            <main>
                <EquipmentModernization enLan={enLan}/>
                <AutomationOfTechnologicalProcesses enLan={enLan}/>
            </main>
            <Background2/>
        </>
    )
}