import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import { ListMenu } from "../../components/list_menu/ListMenu";
import PaperContainer from "../../components/PaperContainer";
//import EditMapPage from "../../map/EditMapPage";
import { PresetListItem } from "../../components/presets/PresetListItem";

export interface Preset {
    name: string;
    description: string;
    data: Array<any>;
}

const ZonePresets = () => {
    const [zones, setZones] = useState<Array<Preset>>([]);
    const [showEditDialog, setShowEditDialog] = useState<boolean>(false);

    const addZone = () => {
        setShowEditDialog(true);
    }

    const saveZone = () => {
        //setZones([...zones, {
            //name: '',
            //description: '',
            //data: []
        //}]);
    }

    return <PaperContainer>
        <ListMenu
            primaryHeader="Zone presets"
            secondaryHeader="All the zones saved"
            listItems={
                zones.map((zone, index) =>
                    {return <PresetListItem preset={zone} url="" key={index} />}
                )
            }
        />
        <Button onClick={addZone}>
            Add new zone
        </Button>
        <Dialog open={showEditDialog}>
            <DialogTitle>Edit zone</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    label="Name"
                    type="text"
                    variant="standard"
                />
                <TextField
                    autoFocus
                    label="Description"
                    type="text"
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {return setShowEditDialog(false)}}>Cancel</Button>
                <Button onClick={saveZone}>Save</Button>
            </DialogActions>
        </Dialog>
    </PaperContainer>

    //return <EditMapPage
        //mode={"zones"}
    ///>
};

export default ZonePresets;
