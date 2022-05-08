import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { BasicDialog } from "Components/Commons/Commons";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStyles } from './TaskDialog.style';
import axios from "axios";
import { Formik, Form } from "formik";
import { generateValidationSchema } from "Helpers/Utils";
import { InputWithOutLabel } from "Components/Commons/Commons";
import { MODAL_TYPES } from "Helpers";

export default function TaskDialog(props) {
    let [loading, setLoading] = useState(false),
        [blogInputs, setBlogInputs] = useState([]),
        [formData, setFormData] = useState({
            title: "",
            author:"",
            description:""
        });
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const BlogvalidationSchema = generateValidationSchema(blogInputs);

    useEffect(() => {
        if(props.type === MODAL_TYPES.EDIT) {
            setFormData({
                ...formData,
                title: props.data?.title,
                description:props.data?.description,
                author:props.data?.author,
            })
        }
    }, []);

    useEffect(() => {
        setBlogInputs([{
            label: "Title",
            name: "title",
            validation: { required: true},
            fieldType: ""
        },
         {
            label: "Description",
            name: "description",
            validation: { required: true},
            fieldType: ""
        },{
            label: "Author",
            name: "author",
            validation: { required: true},
            fieldType: ""
        }])
    },[]);


    const handleSubmit = async (values) => {
        console.log("values:",values);
        let userId = localStorage.getItem('userId');
        let accessToken = localStorage.getItem('accessToken');
        var details = {
            "title": values.title,
            "description": values.description,
            "author": values.author,
            "userId": userId,
        };
        console.log("Result:", details);
        try {
            setLoading(true);
            let blogId = props.data.id && props.data.id;
                if (props.type === MODAL_TYPES.ADD)
                await axios.post(`http://localhost:5000/user/blog/add`,details, {"headers": {
                    'authorization': accessToken,
                }});
            else await axios.put(`http://localhost:5000/user/blog/${blogId}`,details,{"headers": {
                'authorization': accessToken,
            }});
            setLoading(false);
            props.onSuccess(props.type, { ...props.data, ...details });
        }
        catch (error) {
            setLoading(false);
            console.log(
                "formSubmit ~ error",
                error
            );
        }
    };

    return (
        <div className={classes.container}>
            <BasicDialog open={open} onClose={props.onClose} {...props}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent className={classes.btnAction}>
                    <Formik
                        enableReinitialize
                        initialValues={formData}
                        onSubmit={handleSubmit}
                        validationSchema={BlogvalidationSchema}
                    >
                        {({ values, touched, errors, handleChange, setFieldValue }) =>
                (
                    <Form className={classes.root}>
                        {
                            blogInputs.map(input =>
                                <InputWithOutLabel
                                    className="classes.root"
                                    name={input.name}
                                    fieldType={input.fieldType}
                                    placeholder={input.label}
                                    label={input.label}
                                    type={input.type}
                                    value={values[input.name]}
                                    onChange={handleChange}
                                    setFieldValue={setFieldValue}
                                    validated={touched[input.name] && errors[input.name]}
                                />
                            )
                        }
                                <DialogActions>
                                    <Button
                                    variant="contained"
                                        onClick={props.onClose}
                                        color={'secondary'}
                                    >
                                        Cancel
                                    </Button>
                                    <Button type="submit" variant="contained">{props.submitText}</Button>
                                </DialogActions>
                            </Form>)
                        }
                    </Formik>
                </DialogContent>
            </BasicDialog>
        </div>
    );
}
