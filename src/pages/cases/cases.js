import AutomationOfTechnologicalProcesses
    from "@/components/automationOfTechnologicalProcesses/automationOfTechnologicalProcesses";
import EquipmentModernization from "@/components/equipmentModernization/block/equipmentModernization";
import Background2 from "@/components/background/2/background";

export default function Cases() {
    return (
        <>
            <main>
                <EquipmentModernization enLan={false}/>
                <AutomationOfTechnologicalProcesses enLan={false}/>
            </main>
            <Background2/>
        </>
    )
}