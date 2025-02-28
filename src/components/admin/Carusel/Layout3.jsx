import { PhotoCamera } from "@mui/icons-material";
import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import TextInput from "components/general/Inputs/TextField";
import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import StyledTextArea from "components/general/Inputs/StyledTextArea";
const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.filter,
  borderRadius: "40px",
  width: "100%",
  height: "500px",
}));

const PhotIconButton = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  background: theme.palette.primary.main,
  padding: "10px 12px 5px 12px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: " 40px",
  "&:hover": {
    background: theme.palette.primary.main,
  },

  [theme.breakpoints.down("md")]: {
    padding: "6px 5px 0px 5px",
    right: "auto",
    left: "60px",
  },
}));

const StyledImgBox = styled(Box)(({ theme }) => ({
  width: "700px",
  height: "340px",
  position: "absolute",
  right: "50px",
  bottom: "50px",
}));
const StyledImg = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));
const StyledButtonBox = styled(Button)(({ theme }) => ({
  color: "red",
  background: "white",
  "&:hover": {
    color: "red",
    background: "white",
  },
}));

const Page = () => {
  const [title, setTitle] = useState("Sarlavhani kriting");
  const [text, setText] = useState("Mahsulot haqida qisqa malumot kriting");
  const [file, setFile] = useState();
  const handleChangeTitle = (value) => {
    setTitle(value);
  };
  const handleChangeText = (value) => {
    setText(value);
  };
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <Stack pt={2}>
      <Grid
        container
        spacing={2}
        pb={2}
        sx={{ borderBottom: "1px dashed rgba(0,0,0,0.5)" }}
      >
        <Grid item xs={12} sm={4} md={4}>
          <Field
            component={TextInput}
            size="small"
            name="name"
            placeholder="Sarlavhani kriting"
            onChange={(e) => handleChangeTitle(e.target.value)}
            label="Sarlavhani kriting"
            sx={{ marginBottom: "20px" }}
          />
          <Field
            component={TextInput}
            size="small"
            name="link"
            placeholder="Banner mahsuloti uchun link kriting !"
            label="Banner mahsuloti uchun link kriting !"
          />
          <Box display="flex" gap={3} mt={2}>
            <Box position="relative">
              <PhotIconButton component="label" htmlFor="avatar">
                <PhotoCamera
                  sx={{ position: "relative", top: "-3px", color: "#fff" }}
                />
              </PhotIconButton>
              <Box
                component="input"
                type="file"
                accept="image/*"
                name="images"
                id="avatar"
                display="none"
                onChange={(e) => handleChange(e)}
              />
            </Box>
            <Button color="primary" variant="contained">
              Saqlash
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Field
            component={StyledTextArea}
            size="small"
            name="text"
            placeholder="Mahsulot haqida qisqa malumot kriting"
            onChange={(e) => handleChangeText(e?.target?.value)}
            label="Mahsulot haqida qisqa malumot kriting"
          />
        </Grid>
      </Grid>

      <StyledBox mt={2} px={8} position="relative">
        <Grid container display="flex" flexDirection="column">
          <Grid item xs={12} md={6} pt={10} mb={2}>
            <Typography
              variant="h3"
              color="text.filterText"
              sx={{ wordBreak: "break-word" }}
            >
              {title}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} mb={3}>
            <Typography
              variant={{ md: "body2", xs: "body1" }}
              color="text.filterText"
              sx={{ wordBreak: "break-word" }}
            >
              {text}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledButtonBox variant="contained">
              Sotib olish <ArrowRightAltIcon sx={{ marginLeft: "10px" }} />
            </StyledButtonBox>
          </Grid>
        </Grid>
        <StyledImgBox>
          <StyledImg
            component="img"
            src={file ? file : "/assets/media/laptop.png"}
            alt="banner-img"
          />
        </StyledImgBox>
      </StyledBox>
    </Stack>
  );
};

const validate = (values, props) => {
  let errors = {};
  const requiredFields = ["title", "text", "images", "link"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Malumot kiritilmadi!";
    }
  });
};

export default reduxForm({
  form: "banner_settings_form",
  validate,
  enableReinitialize: true,
})(Page);
