import React, { useEffect, useState } from "react";
import {Wrapper,ContentWrapper,DetailWrapper} from "./Dashboard.style";
import Blank from "Assets/blank.png";
import {Typography,FormControl,TextField,IconButton,CircularProgress,Button} from "@material-ui/core";
import TaskDialog from './TaskDialog';
import { MODAL_TYPES } from "Helpers/Constants";
import axios from "axios";
import Pagination from '@material-ui/lab/Pagination';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Loader from 'react-loader-advanced';

//redux
import { connect,useDispatch } from 'react-redux';
import { blogList } from "Redux/Product/Actions";

let initPaginationInfo = {
    total: 0,
    current: 1,
    pageSize: 5,
    sort: {
        field: "title",
        order: "asc",
    },
};

function Dashboard(props) {
    let [paginationInfo, setPaginationInfo] = useState(initPaginationInfo),
        [page, setPage] = useState(1),
        [searchValue, setsearchValue] = useState(""),
        [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch();
    const [modal, setModal] = useState({
        visible: false,
        data: {},
        type: MODAL_TYPES.VIEW
    });
  const handleChange = (event, value) => {
      console.log("event:",event);
    setPage(value);
  };

    useEffect(() => {
        getBlogData(page,searchValue);
        // eslint-disable-next-line
    },[page, searchValue]);

    async function getBlogData(page,searchValue,pagination = paginationInfo) {
        try {
            setLoading(true);
            let newRes = await axios.post('http://localhost:5000/user/blog/list',{
                "userId":props.userId,
                "perPage":pagination.pageSize,
                "pageNo":page,
                "search":[{
                    "field":"title",
                    "value":searchValue
                }]
            }, {"headers": {
                'authorization': props.accessToken,
            }})
            console.log("res", newRes.data.rows)
            dispatch(blogList(newRes.data.data.rows));
            setPaginationInfo({
                ...pagination,
                total: newRes.data.data.count,
            });
            setLoading(false);
        }  catch (error) {
            setLoading(false);
            console.log("error:", error);
        }    
        }

        async function handleDelete(id) {
            console.log("id",id);
            try {
                setLoading(true);
                await axios.delete(`http://localhost:5000/user/blog/${id}`, {"headers": {
                    'authorization': props.accessToken,
                }});
                getBlogData(page,searchValue);
            }  catch (error) {
                setLoading(false);
                console.log("error:", error);
            }
        }
    function toggleModal(type, data = {}) {
        setModal({
            ...modal,
            type,
            data,
            visible: !modal.visible,
        })
    }

    function onSuccess() {
        toggleModal();
        getBlogData(page,searchValue);
    }

    function handleSearch(filterSearch) {
        setsearchValue(filterSearch);
    }
    return (
        <Loader show={loading} message={<CircularProgress style={{ color: "#D85767" }} />} backgroundStyle={{ backgroundColor: 'transparent', position: "fixed" }}>
        <Wrapper>
        <div className="title-wrapper flex">
        <Typography variant="h3" style={{ fontFamily : "cursive" }}>
            BlogApp
        </Typography>
        <div className="actions flex">
            <FormControl component="fieldset" style={{width:"100%"}}>
                        <TextField
                            style={{ marginRight: "10px" }}
                            color="secondary"
                            placeholder="Search..."
                            value={searchValue}
                            variant="outlined"
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </FormControl>
            <Button style={{width:"100%"}} variant="contained" color="primary"
            onClick={() => {
                toggleModal(MODAL_TYPES.ADD);
            }}>
        Create
      </Button>
        </div>
        </div>
        {props.blogList.length ? props.blogList.map((item,index)=>
        <div className="container" style={{display: "grid"}}>
        <ContentWrapper>
            <DetailWrapper>
                <span>
            <Typography variant="h6">
            Title: {item.title}
            <Typography>
            By {item.author}
            </Typography>
            </Typography>
            <br/>
            <Typography>
           Description : {item.description}
        </Typography>
        </span>
            </DetailWrapper>
        </ContentWrapper>
        <div className="action-item" style={{gridArea:"1/1",margin:"auto"}}>
             <IconButton
                        style={{ marginRight: "20px" }}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => {
                            toggleModal(MODAL_TYPES.EDIT,item);
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        style={{ marginRight: "20px" }}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={()=>handleDelete(item.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
        </div>
        </div>
        ):<p style={{height:"auto",margin:"auto"}}>No data</p>}
        {props.blogList.length ?
        <div style={{display:"flex",marginTop:"20px",flexFlow:"row-reverse"}}>
        <Pagination count={Math.ceil(paginationInfo.total / paginationInfo.pageSize)}  page={page}
          onChange={handleChange}
          defaultPage={1} />
        </div> : ""
}
        {modal.visible && (
                        <TaskDialog
                            type={modal.type}
                            data={modal.data}
                            open={modal.visible}
                            title={modal.type === "ADD"?"Create Blog" : "Edit Blog"}
                            submitText={
                                modal.type === "ADD"?
                                "Publish" : "Save"
                            }
                            onSuccess={onSuccess}
                            onClose={toggleModal} 
                            />
                    )}
        </Wrapper>
        </Loader>
    )
}

const mapReduxStateToProps = (state) => ({
	blogList: state.Product.blogList,
    accessToken: state.Auth.accessToken,
    userId: state.Auth.userId,
})

export default connect(mapReduxStateToProps)(Dashboard);