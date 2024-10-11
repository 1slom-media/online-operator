import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import EditIcon from "components/icons/EditIcon";
import PhoneMaskInput from "components/general/Inputs/PhoneMaskInput";
import { Field, reduxForm, reset } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlackList,
  updateBlackList,
} from "redux-store/admin/blacklist/blacklist.slice";
import useAlert from "hooks/useAlert";
import { StyledEditeBtn } from "../TableRows/ProductsRow";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 450 },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  padding: "20px 50px",
};

const EditBlackListModal = ({
  handleSubmit,
  open,
  handleClose,
  handleOpen,
  initialValues,
}) => {
  const { isUpdateLoading } = useSelector((state) => state.blacklist);
  const server = useSelector((state) => state.settings.site_server);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const alert = useAlert();

  const callBack = (status) => {
    if (status == 200 || 201) {
      dispatch(reset("edit_block_number"));
      dispatch(getBlackList({ token, server }));
      handleClose();
      alert.success({ title: "Blok", text: "Raqam bloklandi!" });
    } else {
      dispatch(getBlackList({ token, server }));
      alert.error({ title: "Blok", text: "Noto'gri raqam!" });
    }
  };

  const handleAddNumber = (values) => {
    let phone = values["phone"];
    values["phone"] = `${phone?.replace(/\D/g, "")}`;
    dispatch(
      updateBlackList({
        token,
        server,
        data: values,
        callBack,
        id: initialValues.id,
      })
    );
  };

  return (
    <div>
      <StyledEditeBtn onClick={handleOpen}>
        <EditIcon />
      </StyledEditeBtn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container flexDirection="column">
            <Typography
              variant="h6"
              color="secondary.100"
              textAlign="center"
              mb={2}
            >
              Raqam kiritish
            </Typography>
            <Typography
              variant="string"
              color="secondary.100"
              textAlign="center"
              mb={2}
            >
              Ushbu raqam o&apos;zgartirilmoqda {"+" + initialValues.phone}
            </Typography>

            <Grid item xs={12} mb={4}>
              <Field
                component={PhoneMaskInput}
                label="Telefon raqam kirting"
                name="phone"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="space-between">
              <Button variant="contained" color="inherit" onClick={handleClose}>
                Bekor qilish
              </Button>
              <LoadingButton
                variant="contained"
                color="primary"
                loading={isUpdateLoading}
                onClick={handleSubmit(handleAddNumber)}
              >
                Tasdiqlash
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

// EditBlackListModal.propTypes = {
//   error: PropTypes.string,
//   handleDelete: PropTypes.func,
//   phone: PropTypes.string,
// };

// EditBlackListModal.defaultProps = {
//   error: "",
//   handleDelete: () => {},
//   phone: "",
// };

function validate(props) {
  const errors = {};
  const requiredFields = ["phone"];

  requiredFields.forEach((val) => {
    if (!props[val]) {
      errors[val] = "Ma'lumot kiritilmadi";
    }
  });

  return errors;
}

export default reduxForm({
  form: "edit_block_number",
  validate,
})(EditBlackListModal);
