import { useState } from "react";
import { Button } from "@mui/material";
import { ListMenu } from "../../components/list_menu/ListMenu";
import PaperContainer from "../../components/PaperContainer";
import PresetEditDialog from "../../components/presets/PresetEditDialog";
//import EditMapPage from "../../map/EditMapPage";
import { PresetListItem } from "../../components/presets/PresetListItem";

export interface Preset {
    id?: string;
    name: string;
    description: string;
    data: Array<any>;
}

const ZonePresets = () => {
    const [zones, setZones] = useState<Array<Preset>>([]);
    const [showEditDialog, setShowEditDialog] = useState<boolean>(false);
    const [selectedZone, setSelectedZone] = useState<Preset | null>(null);

    const addZone = () => {
        editZone({
            name: '',
            description: '',
            data: []
        });
    }

    const editZone = (zone: Preset) => {
        setSelectedZone(zone);
        setShowEditDialog(true);
    }

    const saveZone = ({name, description}: {name: string, description: string}) => {
        const zone = {...selectedZone, name, description} as Preset;
        if (!zone.id) {
            //TODO: Save zone
            // FIXME: Temporary until there's a proper preset persistence
            zone.id = Math.floor(Math.random()*100000).toString();
            setZones([...zones, zone])
        } else {
            const index = zones.findIndex(z => {return z.id === zone.id});
            zones[index] = zone;
            setZones(zones);
        }
        //setZones([...zones, {
            //name: '',
            //description: '',
            //data: []
        //}]);
        setShowEditDialog(false);
    }

    return <PaperContainer>
        <ListMenu
            primaryHeader="Zone presets"
            secondaryHeader="All the zones saved"
            listItems={
                zones.map((zone, index) =>
                    {return <PresetListItem
                        preset={zone}
                        onEdit={editZone}
                        url={"/settings/presets/zones/" + zone.id}
                        key={index}
                    />}
                )
            }
        />
        <Button onClick={addZone}>
            Add new zone
        </Button>
        {
            showEditDialog && <PresetEditDialog
                open={showEditDialog}
                name={selectedZone?.name}
                description={selectedZone?.description}
                onSave={saveZone}
                onClose={() => {setShowEditDialog(false)}}
            />
        }
    </PaperContainer>

    //return <EditMapPage
        //mode={"zones"}
    ///>
};

export default ZonePresets;
