import React from "react";
import { Modal, Backdrop, Fade, makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import GetVideos from "../service/get.videos";

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

const AllVideos = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalVideo, setmodalVideo] = useState("false");
  const [videoList, setvideoList] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleVideo = (value) => {
    debugger;
    setmodalVideo(value);
    setOpen(true);
    console.log(modalVideo);
  };

  useEffect(() => {
    GetVideos.getVideos()
      .then((resp) => {
        setvideoList(resp.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="flexDiv col-lg-12 col-xs-1">
      {videoList.map((video, index) => (
        <video
          className="XXXCard"
          key={index}
          src={video}
          alt={`image-${index}`}
          onClick={(e) => handleVideo(video)}
        />
      ))}

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
          <video
            controls
            src={modalVideo}
            alt="asd"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </Fade>
      </Modal>
    </div>
  );
};

export default AllVideos;
