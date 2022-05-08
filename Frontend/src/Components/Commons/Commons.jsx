import * as React from 'react';
import { Dialog } from '@material-ui/core';
import { FormControl, TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useStyles } from "./Commons.style";

function InputWithOutLabel(props) {
    let { label, fieldType, ...rest } = props;
    const classes = useStyles();

    return (
        <FormControl
            component="fieldset"
            style={{ width: "100%", marginBottom: "10px" }}
        >
            {fieldType?.type === "AutoComplete" ?
                <Autocomplete
                    style={{
                        width: "100%"
                    }}
                    className={classes.rootAutoComplete}
                    disablePortal
                    multiple={fieldType?.multiple}
                    size="small"
                    fullWidth={true}
                    onChange={(e, value) => (console.log("value", value), rest.setFieldValue(rest.name, value))}
                    options={fieldType?.data && fieldType?.data}
                    value={rest?.value && rest?.value}
                    getOptionLabel={option => option?.label}
                    sx={{ width: 400 }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            {...rest}
                            className={classes.root}
                            variant={"filled"}
                            fullWidth
                        />
                    }
                />
                :
                <>
                    <TextField
                        {...rest}
                        className={classes.root}
                        variant={"filled"}
                        fullWidth
                    />
                </>
            }
            <div className={classes.rootErrorWithOutLabel}>{props.validated}</div>
        </FormControl>
    )
}

function BasicDialog(props) {
    let [open, setOpen] = React.useState(false);
    let { width, onConfirm, onSuccess, onClose, loading, submitText, children, ...rest } = props;
    React.useEffect(() => {
        if (props.open) {
            setOpen(true);
        }
    })
    return (
        <div>
            <Dialog open={open} onClose={onClose}>{children}</Dialog>
        </div>
    );
}

export { BasicDialog, InputWithOutLabel };
