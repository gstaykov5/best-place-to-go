import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import produce from "immer"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import { Box, Typography } from '@material-ui/core';
import { Button, Grid, ImageList, ImageListItem, Modal, TextField } from '@mui/material';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';

import { allComments, deleteComment, newComment } from '../../../features/actions/actionComments';
import Edit from './Edit';
import { deletePlace } from '../../../features/actions/actionPlace';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Details = () => {
  const [open, setOpen] = React.useState(false);
  const [isAuthor, setIsAuthor] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { places } = useSelector(state => state.placesReducer);
  const { user } = useSelector(state => state.registeLoginReducer);
  const { comments }  = useSelector(state => state.commentReducer);
  const [comment, setComment] = useState({ placeId: id, comment: '', authorId: user.id, username: user.username, date: new Date().toLocaleString()});

  useEffect(() => {
    const place = places.filter(place => {
      return place._id === id
    })
    if (user.id === place[0].authorId || user.role === 'admin') {
      setIsAuthor(true);
    }

    dispatch(allComments(id));
  }, [])
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleComment = (e) => {
    const com = e.target.value;
    const immerComment = produce(comment, draft => {
      draft.comment = com;
    });
    setComment(immerComment);
  }

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment(commentId));
    dispatch(allComments(id));
  }
  
  const sendComment = () => {
    if(comment.comment !== '') {
      dispatch(newComment(comment));
      dispatch(allComments(id));
    }
  }

  const handledDletePlace = () => {
    dispatch(deletePlace(id));
    navigate('/BestPlaceToGo', {replace: true})
  }
  
  return (
    <div>
        <Box sx={{flexGrow: 1}}>
            <Grid container style={{marginTop: '100px', justifyContent: 'center'}}>
                <Grid item lg={4} md={6} xs={12} sx={{ml: 10}} >
                  <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>

                      {places?.filter(pl => (pl._id === id)).map((item) => (
                        <ImageList key={item._id} variant="masonry" cols={3} gap={8} >
                          {item.images.map((img) => (
                            <ImageListItem key={img._id} >
                              <img
                                src={`${img.image}?w=248&fit=crop&auto=format`}
                                srcSet={`${img.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.country}
                                loading="lazy"
                              />

                                            {/* <Modal
                                          open={open}
                                          onClose={handleClose}
                                          aria-labelledby="modal-modal-title"
                                          aria-describedby="modal-modal-description"
                                        >
                                          <Button sx={style}>
                                          <ImageListItem key={img._id} >
                                            <img
                                              src={`${img.image}?w=248&fit=crop&auto=format`}
                                              srcSet={`${img.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                              alt={item.country}
                                              loading="lazy"
                                            />
                                          </ImageListItem>
                                          </Button>
                                        </Modal> */}
                          
                            </ImageListItem>
                            
                          ))}
                        </ImageList>
                      ))}
                  </Box>
                </Grid>

                <Grid item lg={6} md={6} xs={12} style={{boxShadow: '2px 2px 10px 5px black'}}>
                  {places?.filter(pl => pl._id === id).map(item => (
                    <Box key={item._id}>
                      <Grid item sx={{ml: 10}} >
                        <Typography variant="h4" style={{ marginTop: '30px',  marginBottom: '50px' }}>{item.country}</Typography>
                        <Typography variant="h5" style={{ marginBottom: '50px' }}>{item.city}</Typography>
                        <Typography variant="h5" style={{ marginBottom: '50px' }}>{item.date}</Typography>
                        <Typography variant="h5" >{item.description}</Typography>
                      </Grid>

                      <Grid item xs={12} lg={8} sx={{ mt: 10, ml: 20 }}>
                        <MapContainer center={item.location} zoom={10} style={{ width: '100%', height: '50vh'}}>
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                          <Marker position={item.location}>
                            <Popup>
                            <ImageListItem key={item.images[0]._id} >
                              <img
                                src={`${item.images[0].image}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.images[0].image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.country}
                                loading="lazy"
                              />
                            </ImageListItem>
                              {item.images[0].image}
                            </Popup>
                          </Marker>
                        </MapContainer>
                      </Grid>


                      {isAuthor && 
                      <Grid item lg={12} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', p: 12, m: 1, }}>
                        <Button
                          sx={{ height: '57px' }}
                          size='large'
                          variant="outlined"
                          endIcon={<EditIcon />}
                          onClick={handleOpen}
                          >
                          Edit
                        </Button>
                        <Button
                          sx={{ height: '57px' }}
                          size='large'
                          variant="outlined"
                          endIcon={<EditIcon />}
                          onClick={handledDletePlace}
                          >
                          Delete
                        </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            
                            <Edit />
                            
                          </Box>
                        </Modal>
                      </Grid> }

                      <Grid item lg={12} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', p: 1, m: 1, }}>
                        <TextField
                          fullWidth
                          variant='outlined'
                          label='Comment'
                          color="warning"
                          focused onChange={handleComment}
                        />
                        <Button 
                          size='large' 
                          variant="outlined" 
                          sx={{ width: '35%', ml: 5,  height: '57px' }} 
                          onClick={sendComment}
                          endIcon={<SendIcon />}
                        >
                            Add comment
                        </Button>
                      </Grid>
                    </Box>
                  ))}
                </Grid>

                <Grid item lg={8} md={6} xs={12} style={{marginTop: '100px', marginBottom: '70px'}}>
                    <Typography variant="h4">Comments</Typography>
                </Grid>
                  {comments?.map(comment => (
                    <Grid item
                      key={comment._id}
                      lg={8} md={8} xs={10} 
                      style={{ marginBottom: '50px', 
                      borderBottom: '1px solid black'
                    }}>
                      <Typography variant="body1" align='left' >
                        <FollowTheSignsIcon fontSize="small" />
                          {comment.username}
                        </Typography>
                        <Typography variant="body1" align='left' >
                          {comment.comment}
                        </Typography>
                        <Typography variant="body1" align='right' >
                          {comment.date}
                        </Typography>
                        <Button size='small' onClick={() => handleDeleteComment(comment._id)}>
                          Delete
                      </Button>
                      {comment.authorId === user.id && <Button size='small'>Edit</Button>}
                    </Grid>
                  ))}
            </Grid>
          </Box>
    </div>
  )
}

export default Details