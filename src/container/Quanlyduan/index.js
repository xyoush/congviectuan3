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
class Quanlyduan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TrangThai: [
        {
          label: "Chưa nhận",
        },
        {
          label: "Đã nhận",
        },
        {
          label: "Đang thực hiện",
        },
        {
          label: "Hoàn thành",
        },
      ],
      GiaiDoan: [
        {
          label: "Giai đoạn đàm phán",
        },
        {
          label: "Giai đoạn thực hiện",
        },
        {
          label: "Giai đoạn nguyện thu",
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
  renderlistlabelTrangThai= () => {
    const { TrangThai } = this.state;
    let xhtml = null;
    xhtml = TrangThai.map((option, index) => (
      <option key={index} value={option.label}>
        {option.label}
      </option>
    ));
    return xhtml;
  };

  renderlistlabelGiaiDoan= () => {
    const { GiaiDoan } = this.state;
    let xhtml = null;
    xhtml = GiaiDoan.map((option, index) => (
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
          <Paper className={classes.media}>
            <WorkIcon className={classes.icon} style={{ fontSize: 55 }} />
          </Paper>

          <CardContent>
            <Typography variant="h6" gutterBottom className={classes.Ten}>
              Chi tiết dự án
            </Typography>
            <form noValidate autoComplete="off" className={classes.form}>
              <TextField
                id="maduan"
                label="Mã dự án"
                defaultValue="MG123123"
              />
              <TextField
                id="tenduan"
                label="Tên dự án"
                defaultValue="Thiết kế website shop MixiShop"
                type="text"
              />
              <TextField
                id="tenkhachhang"
                label="Khách hàng"
                defaultValue="Nguyễn Thị Thái Hà"
                type="text"
              />
              <TextField
                id="baohanh"
                label="Bảo hành"
                defaultValue="Bảo hành Thiết kế website shop MixiShop"
                type="text"
              />
             <TextField
                  className={classes.text12}
                  select
                  id="standard-select-currency-native"
                  name="list"
                  label="Trạng thái"
                  onChange={this.onChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {this.renderlistlabelTrangThai()}
                </TextField>
                <TextField
                  className={classes.text12}
                  select
                  id="standard-select-currency-native"
                  name="list"
                  label="Giai đoạn"
                  onChange={this.onChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {this.renderlistlabelGiaiDoan()}
                </TextField>
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
              <TextField
                id="nguoithuchien"
                label="Người thực hiện"
                defaultValue="Nguyễn Thị Mạnh"
                type="text"
              />
              <TextField
                id="kinhphi"
                label="Kinh phí"
                defaultValue="100,000,000 VND"
                type="text"
              />
             
              <TextField
                id="outlined-multiline-static"
                label="Nội dung"
                multiline
                rows={6}
                defaultValue="Nguyễn Thị Thái Hà vừa bị giáng chức từ Ô sin xuống nô lệ tình ..."
                variant="outlined"
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

Quanlyduan.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Quanlyduan);
