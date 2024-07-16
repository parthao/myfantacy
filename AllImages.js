import React from 'react';
import "../Style/imageCard.css"
import { Modal, Backdrop, Fade, makeStyles } from "@material-ui/core";
import { useState } from "react";
import Box from '@mui/material/Box';
import ImageListed from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ZoomableImage from '../ZoomableImage';

const images = require.context("../Assets/LongAPP", false, /\.(png|jpe?g|svg)$/)
const imageList = images.keys().map(imagex => images(imagex));


const useStyles = makeStyles((theme) => ({

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundcolor: "red"
    }
  },
  img: {
    outline: "none"
  }
}));

const AllImages = () => {


  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalImage, setmodalImage] = useState("false");


  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value) => {
    debugger
    setmodalImage(value);
    setOpen(true);
    console.log(modalImage);
  };


  return (

    // <div className='flexDiv col-lg-12 col-xs-1'>
    <div>
      {/* {imageList.map((image, index) => (
        <img className="XXXCard" key={index} src={image} alt={`PIC${index}`} onClick={(e) => handleImage(image)} />
      ))} */}

      <Box sx={{ width: "100%", height: "100%", overflowY: 'scroll' }}>
        <ImageListed variant="masonry" cols={3} gap={8}>
          {imageList.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                onClick={(e) => handleImage(item)}
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageListed>
      </Box>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}>

        <Fade in={open} timeout={500} className={classes.img}>
          {/* <img
            src={modalImage}
            alt="asd"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          /> */}
          <ZoomableImage src={modalImage} alt="Zoomable Image" />
        </Fade>
      </Modal>
    </div>


  );
}

export default AllImages;
