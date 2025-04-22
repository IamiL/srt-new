import AutomationOfTechnologicalProcesses
    from "@/components/automationOfTechnologicalProcesses/automationOfTechnologicalProcesses";
import EquipmentModernization from "@/components/equipmentModernization/block/equipmentModernization";

export default function Cases() {
    return (
        <>
            <EquipmentModernization enLan={false}/>
            <AutomationOfTechnologicalProcesses enLan={false}/>
        </>
    )
}