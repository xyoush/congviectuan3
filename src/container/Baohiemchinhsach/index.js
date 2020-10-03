import { CardMedia, Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
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
            <LocalLibraryIcon
              className={classes.icon}
              style={{ fontSize: 55 }}
            />
          </Paper>

          <CardContent>
            <Typography variant="h6" gutterBottom className={classes.Ten}>
              {`Bảo hành & chính sách`}
            </Typography>
            <form noValidate autoComplete="off" className={classes.form}>
              <TextField
                id="msnv"
                label="Mã bảo hành"
                defaultValue="MG123123"
              />
              <TextField
                id="hovaten"
                label="Tên bảo hành, chính sách"
                defaultValue="Nguyễn Thị Thái Hà"
                type="text"
              />
              <TextField
                id="hovaten"
                label="Họ và Tên"
                defaultValue="Nguyễn Thị Thái Hà"
                type="text"
              />
              <TextField
                id="date"
                label="Thời gian"
                type="date"
                defaultValue="2020-11-16"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="outlined-multiline-static"
                label="Nội dung"
                multiline
                rows={6}
                defaultValue="abc"
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
