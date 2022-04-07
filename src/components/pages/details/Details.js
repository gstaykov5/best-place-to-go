import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import produce from "immer"

import { Box, Typography } from '@material-ui/core';
import { Button, Grid, ImageList, ImageListItem, TextField } from '@mui/material';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';

import { allComments, deleteComment, newComment } from '../../../features/actions/actionComments';
import store from '../../../features/store/store';

const Details = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { places } = useSelector(state => state.placesReducer);
  const { user } = useSelector(state => state.registeLoginReducer);
  const { comments }  = useSelector(state => state.commentReducer);
  const [comment, setComment] = useState({ placeId: id, comment: '', authorId: user.id, username: user.username, date: new Date().toLocaleString()});

  dispatch(allComments(id))

  const handleComment = (e) => {
    const com = e.target.value;
    const immerComment = produce(comment, draft => {
      draft.comment = com;
    });
    setComment(immerComment);
  }

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment(commentId));
    console.log(commentId)
  }
  
  const sendComment = () => {
    dispatch(newComment(comment));
    inputRef.current.value = '';
    console.log(comment)
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
                            </ImageListItem>
                          ))}
                        </ImageList>
                      ))}
                  </Box>
                </Grid>

                <Grid item lg={6} md={6} xs={12} style={{boxShadow: '10px 10px 10px 5px grey'}}>
                  {places?.filter(pl => pl._id === id).map(item => (
                    <Box key={item.id}>
                      <Grid item sx={{ml: 10}} >
                        <Typography variant="h4" style={{ marginTop: '30px',  marginBottom: '50px' }}>{item.country}</Typography>
                        <Typography variant="h5" style={{ marginBottom: '50px' }}>{item.city}</Typography>
                        <Typography variant="h5" >{item.description}</Typography>
                      </Grid>



                      <Grid item lg={12} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', p: 12, m: 1, }}>
                        <Button sx={{ height: '57px' }} size='large' variant="outlined" endIcon={<EditIcon />}>Edit</Button>
                      </Grid> 

                      <Grid item lg={12} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', p: 1, m: 1, }}>
                        <TextField
                          fullWidth
                          variant='outlined'
                          label='Comment'
                          color="warning"
                          ref={inputRef}
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