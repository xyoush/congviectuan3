import { CardMedia, Grid, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";

class Quanlykhachhang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoaiKhachHang: [
        {
          label: "Khách vip",
        },
        {
          label: "Khách thân thiết",
        },
        {
          label: "Khách lâu năm ",
        },
      ],
      GioiTinh: [
        {
          label: "Nam",
        },
        {
          label: "Nữ",
        },
      ],
    };
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

  renderlistlabelLoaiKhachHang = () => {
    const { LoaiKhachHang } = this.state;
    let xhtml = null;
    xhtml = LoaiKhachHang.map((option, index) => (
      <option key={index} value={option.label}>
        {option.label}
      </option>
    ));
    return xhtml;
  };

  renderlistlabelGioiTinh = () => {
    const { GioiTinh } = this.state;
    let xhtml = null;
    xhtml = GioiTinh.map((option, index) => (
      <option key={index} value={option.label}>
        {option.label}
      </option>
    ));
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.gird}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.media}>
              <PermContactCalendarIcon
                className={classes.icon}
                style={{ fontSize: 55 }}
              />
            </Paper>

            <CardContent>
              <Typography variant="h6" gutterBottom className={classes.Ten}>
                Chi tiết Khách Hàng
              </Typography>
              <form noValidate autoComplete="off" className={classes.form}>
                <TextField id="mskh" label="MSKH" defaultValue="MKH123" />
                <TextField
                  id="hovaten"
                  label="Họ và Tên"
                  defaultValue="Nguyễn Thị Thái Hà"
                  type="text"
                />
                <TextField
                  id="date"
                  label="Ngày sinh"
                  type="date"
                  defaultValue="2020-11-16"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  className={classes.text12}
                  select
                  id="standard-select-currency-native"
                  name="list"
                  label="Giới tính"
                  onChange={this.onChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {this.renderlistlabelGioiTinh()}
                </TextField>

                <TextField
                  className={classes.text12}
                  select
                  id="standard-select-currency-native"
                  name="list"
                  label="Loại khách hàng"
                  onChange={this.onChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {this.renderlistlabelLoaiKhachHang()}
                </TextField>

                <TextField
                  id="sdt"
                  label="Điện thoại"
                  defaultValue="0124828382"
                />
                <TextField
                  id="diachi"
                  label="Địa chỉ"
                  defaultValue="27-Nguyễn Tất Thành-BMT"
                />
              </form>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Cập nhật
              </Button>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card2}>
              <CardContent className={classes.cardtext2}>
                <CardMedia
                  className={classes.media2}
                  image="https://i.imgur.com/up7EERp.jpg"
                  title="Contemplative Reptile"
                />
                <Typography
                  gutterBottom
                  component="h2"
                  className={classes.Typo}
                >
                  Trần Văn Thái Hà
                </Typography>
                <Typography component="p">Khách vip</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Quanlykhachhang.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Quanlykhachhang);
