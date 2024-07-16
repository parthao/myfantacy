import React from "react";
import "../Style/imageCard.css";
import { Modal, Backdrop, Fade, makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import GetImages from "../service/get.images";
import Box from "@mui/material/Box";
import ImageListed from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ZoomableImage from "../ZoomableImage";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundcolor: "red",
    },
  },
  img: {
    outline: "none",
  },
}));

const AllImages = () => {
  const [images, setImages] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalImage, setmodalImage] = useState("false");

  useEffect(() => {
    GetImages.getImages()
      .then((resp) => {
        setImages(resp.data);
      })
      .catch((error) => {});
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value) => {
    debugger;
    setmodalImage(value);
    setOpen(true);
    console.log(modalImage);
  };

  return (
    <div>
      <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
        <ImageListed variant="masonry" cols={3} gap={8}>
          {images.map((item) => (
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
          timeout: 500,
        }}
      >
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
};

export default AllImages;
