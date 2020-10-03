import { Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import WorkIcon from "@material-ui/icons/Work";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";
class Quanlykhachhang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.gird}>
          <Paper className={classes.media}>
            <WorkIcon className={classes.icon} style={{ fontSize: 55 }} />
          </Paper>

          <CardContent>
            <Typography variant="h6" gutterBottom className={classes.Ten}>
              Chi tiết kế hoạch công việc
            </Typography>
            <form noValidate autoComplete="off" className={classes.form}>
              <TextField
                id="msnv"
                label="Mã số kế hoạch"
                defaultValue="MG123123"
              />
              <TextField
                id="hovaten"
                label="Tên kế hoạch"
                defaultValue="Nguyễn Thị Thái Hà"
                type="text"
              />
              <TextField
                id="hovaten"
                label="Người đảm nhận"
                defaultValue="Nguyễn Thị Thái Hà"
                type="text"
              />
              <TextField
                id="date"
                label="Ngày bắt đầu"
                type="date"
                defaultValue="2020-01-16"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="date"
                label="Ngày kết thúc"
                type="date"
                defaultValue="2020-09-21"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div className={classes.root2}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CloudUploadIcon />}
                    component="span"
                  >
                    Tải file
                  </Button>
                </label>
              </div>
              <TextField
                id="outlined-multiline-static"
                label="Nội dung"
                multiline
                rows={6}
                defaultValue="Nguyễn Thị Thái Hà vừa bị giáng chức từ Ô sin xuống nô lệ tình ..."
                variant="outlined"
              />
              
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sửa
              </Button>
            </form>
          </CardContent>
        </Grid>
      </div>
    );
  }
}

Quanlykhachhang.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Quanlykhachhang);
