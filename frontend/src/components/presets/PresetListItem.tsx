import React from "react";
import {
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";
import { Preset } from "../../settings/presets/ZonePresets";
import { ArrowForwardIos, Delete, Edit } from "@mui/icons-material";
import {Link} from "react-router-dom";

export const PresetListItem: React.FunctionComponent<{
    preset: Preset,
    url: string,
    onEdit: (preset: Preset) => void
}> = ({
    preset,
    url,
    onEdit
}): JSX.Element => {
    return (
        <>
            <ListItem
                disableGutters
            >
                <ListItemButton
                    component={Link}
                    to={url}
                >
                    <ListItemText
                        primary={preset.name}
                        secondary={preset.description}
                        style={{marginRight: "2rem"}}
                    />
                    <ArrowForwardIos/>
                </ListItemButton>
                <IconButton onClick={() => {return onEdit(preset)}}>
                    <Edit/>
                </IconButton>
                <IconButton>
                    <Delete/>
                </IconButton>
            </ListItem>
        </>
    );
};
