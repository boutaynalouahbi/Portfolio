import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from '@mui/material/Snackbar';
import { Alert as MuiAlert } from '@mui/material';
import { TextField, Button, Typography, Box } from "@mui/material";
import "./styles.scss"

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert ref={ref} elevation={6} variant="filled" {...props} />;
});
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    emailjs
      .sendForm('service_ywfdspg', 'template_m8vci2t', form.current, {
        publicKey: 'bZP6mWGpqLihu9tga',
      })
      .then(
        (result) => {
          setAlertSeverity('success');
          setAlertMessage('Le formulaire a été soumis avec succès !');
          setIsOpen(true);
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          setAlertSeverity('error');
          setAlertMessage('Une erreur s\'est produite lors de la soumission du formulaire.');
          setIsOpen(true);
          console.log(error.text);
        }
      );
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  return (
    <section id="Contact">
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}>
        <Alert onClose={handleClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: 800 , mx: "auto", p: 2 }}>
        <h1 style={{textAlign:"center"}}>
          Contact
        </h1>
        <p style={{textAlign:"center"}}>
        N'hésitez pas à me contacter
        </p>
        
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            fullWidth
            label="Nom"
            name="user_name"
            margin="normal"
            color="warning"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="user_email"
            margin="normal"
            required
            color="warning"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            margin="normal"
            required
            color="warning"
            multiline
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 ,width:"100%"}} color="warning" size="large">
            Envoyer
          </Button>
        </form>
      </Box>
      
    </Box>
    
    </section>
  );
};

export default Contact;

