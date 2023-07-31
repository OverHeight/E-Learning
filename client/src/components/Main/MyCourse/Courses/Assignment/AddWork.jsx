import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlineFileAdd } from "react-icons/ai";
import "../../../../../index.css";

export default function AddWork() {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState();

  function handleFile(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDone = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className="flex bg-sky-700 my-2 p-2 rounded-lg w-32 text-white"
        onClick={handleClickOpen}
      >
        <AiOutlineFileAdd className="my-1 me-2 text-xl" />
        <h1 className="my-1">Add Work</h1>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Send your work here"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <input type="file" onChange={handleFile} className="my-2" />
            <img src={file} alt="your work uploaded" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDone} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
