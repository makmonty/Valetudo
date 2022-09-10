import React from "react";
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import ConfirmationDialog from "../ConfirmationDialog";
import { Preset } from "../../settings/presets/ZonePresets";
import { ArrowForwardIos, Delete, Edit } from "@mui/icons-material";

export const PresetListItem: React.FunctionComponent<{
    preset: Preset,
    url: string,
}> = ({
    preset,
    url
}): JSX.Element => {
    return (
        <>
            <ListItem
                disableGutters
            >
                <ListItemButton
                    href={url}
                >
                    <ListItemText
                        primary={preset.name}
                        secondary={preset.description}
                        style={{marginRight: "2rem"}}
                    />
                    <ArrowForwardIos/>
                </ListItemButton>
                <IconButton>
                    <Edit/>
                </IconButton>
                <IconButton>
                    <Delete/>
                </IconButton>
            </ListItem>
        </>
    );
};
