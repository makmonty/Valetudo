import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormGroup, TextField } from '@mui/material';
import React, { useState } from 'react';

const PresetEditDialog: React.FunctionComponent<{
    name?: string,
    description?: string,
    open: boolean,
    onSave: (data: {name: string, description: string}) => void,
    onClose?: () => void,
}> = ({
    name = '',
    description = '',
    open,
    onSave,
    onClose
}) => {
    const [presetName, setName] = useState<string>(name);
    const [presetDescription, setDescription] = useState<string>(description);

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    };

    const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.currentTarget.value);
    };

    return <Dialog open={open}>
            <DialogTitle>Edit preset</DialogTitle>
            <DialogContent>
                <FormGroup>
                    <TextField
                        autoFocus
                        label="Name"
                        value={presetName}
                        onChange={onChangeName}
                        type="text"
                        variant="standard"
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        label="Description"
                        value={presetDescription}
                        onChange={onChangeDescription}
                        type="text"
                        variant="standard"
                    />
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={() => {return onSave({name: presetName, description: presetDescription})}}>Save</Button>
            </DialogActions>
        </Dialog>
};

export default PresetEditDialog;
