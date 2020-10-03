import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListIcon from "@material-ui/icons/List";
import PropTypes from "prop-types";
import React, { Component } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import AddIcon from "@material-ui/icons/Add";
import styles from "./styles";

var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
console.log(date);
class Trangchu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: "2",
    };
  }

  listDuAnDangLam = [
    {
      label: "Thiết kế website thương mại shop thời trang",
      name: "Mai Ngọc Dương,  Chu Đức Mạnh, Hồ Đình An",
      date: date,
    },
    {
      label: "Thiết kế website thương mại shop thời trang",
      name: "Mai Ngọc Dương,  Chu Đức Mạnh, Hồ Đình An",
      date: date,
    },
  ];

  listThongBao = [
    {
      label: "Thông báo nộp báo cáo thiết kế website Mixi",
      name: "Mai Ngọc Dương,  Chu Đức Mạnh, Hồ Đình An",
      date: date,
      label1: "Thông báo nộp báo cáo thiết kế website Bất động sản",
      name1: "Mai Ngọc Dương,  Chu Đức Mạnh",
      date: date,
    },
  ];
  listKeHoach = [
    {
      label: "Thông báo nộp báo cáo thiết kế website Mixi",
      name: "Mai Ngọc Dương,  Chu Đức Mạnh, Hồ Đình An",
      date: date,
      decription:
      "Kế hoạch là một tập hợp những hoạt động, công việc được sắp xếp theo trình tự nhất định để đạt " +
      "được mục tiêu đã đề ra. Lập kế hoạch là chức năng đầu tiên trong bốn chức năng của quản lý là" +
      "lập kế hoạch, tổ chức, lãnh đạo và kiểm tra. Lập kế hoạch là chức năng rất quan trọng đối " +
      "với mỗi nhà quản lý bởi vì nó gắn liền với việc lựa chọn mục tiêu và chương trình hành động " +
      "trong tương lai Kế hoạch, điều thách thức lớn với hầu hết các nhà quản lý, đặc biệt là với " +
      "các doanh nghiệp",

    
    },
  ];
  showChiTiet = () => {
    this.setState({
      line: this.state.line === "2" ? "100" : "2",
    });
  };

  renderDuAnDangLam = () => {
    let xhtml = null;
    const { classes } = this.props;
    const { line } = this.state;

    xhtml = this.listDuAnDangLam.map((list, index) => {
      return (
        <Grid item xs={4} key={index}>
          <Card className={classes.card}>
            <Paper className={classes.paper}>
              <ListIcon className={classes.icon} style={{ fontSize: 50 }} />
            </Paper>
            <CardHeader
              title="Dự án đang làm"
              className={classes.titleCardHeader}
            />
            <Divider className={classes.DividerColor} />
            <CardContent className={classes.CardContent}>
              <Typography
                variant="h1"
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Công việc : {list.label}
              </Typography>

              <Typography
                variant="h1"
                className={classes.title2}
                color="textSecondary"
                gutterBottom
              >
                Thời Gian : {list.date} - 28-11-2020
              </Typography>
              <Typography
                variant="h1"
                className={classes.title1}
                color="textSecondary"
                gutterBottom
              >
                Người đảm nhận : {list.name}
              </Typography>

              <LinesEllipsis
                maxLine={line}
                trimRight
                basedOn="letters"
              ></LinesEllipsis>
            </CardContent>
          </Card>
        </Grid>
      );
    });
    return xhtml;
  };

  renderThongBao = () => {
    let xhtml = null;
    const { classes } = this.props;
    const { line } = this.state;

    xhtml = this.listThongBao.map((list, index) => {
      return (
        <Grid item xs={4} key={index}>
          <Card className={classes.card}>
            <Paper className={classes.paper1}>
              <NotificationsIcon
                className={classes.icon}
                style={{ fontSize: 50 }}
              />
            </Paper>
            <CardHeader
              title="Thông Báo"
              className={classes.titleCardHeader}
            />
            <Divider className={classes.DividerColor1} />
            <CardContent className={classes.CardContent}>
              <Typography
                variant="h1"
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Công việc : {list.label}
              </Typography>

              <Typography
                variant="h1"
                className={classes.title2}
                color="textSecondary"
                gutterBottom
              >
                Thời Gian : {list.date} - 28-11-2020
              </Typography>
              <Typography
                variant="h1"
                className={classes.title1}
                color="textSecondary"
                gutterBottom
              >
                Người đảm nhận : {list.name}
              </Typography>
            </CardContent>
            {/* nội dung 2 */}
            <CardContent className={classes.CardContent}>
              <Typography
                variant="h1"
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Công việc : {list.label1}
              </Typography>

              <Typography
                variant="h1"
                className={classes.title2}
                color="textSecondary"
                gutterBottom
              >
                Thời Gian : {list.date} - 28-11-2020
              </Typography>
              <Typography
                variant="h1"
                className={classes.title1}
                color="textSecondary"
                gutterBottom
              >
                Người đảm nhận : {list.name1}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });
    return xhtml;
  };

  // Phần list Kế 
  renderKeHoach = () => {
    let xhtml = null;
    const { classes } = this.props;
    const { line } = this.state;

    xhtml = this.listKeHoach.map((list, index) => {
      return (
        <Grid item xs={4} key={index}>
          <Card className={classes.card}>
            <Paper className={classes.paper}>
              <LibraryBooksIcon
                className={classes.icon}
                style={{ fontSize: 50 }}
              />
            </Paper>
            <CardHeader
              title="Kế hoạch"
              className={classes.titleCardHeader}
            />
            <Divider className={classes.DividerColor} />
            <CardContent className={classes.CardContent}>
              <Typography
                variant="h1"
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Công việc : {list.label}
              </Typography>

              <Typography
                variant="h1"
                className={classes.title2}
                color="textSecondary"
                gutterBottom
              >
                Thời Gian : {list.date} - 28-11-2020
              </Typography>
              <Typography
                variant="h1"
                className={classes.title1}
                color="textSecondary"
                gutterBottom
              >
                Người đảm nhận : {list.name}
              </Typography>
              {`Mô tả chi tiết: `}
              <LinesEllipsis
                text={list.decription}
                maxLine={line}
                trimRight
                basedOn="letters"
              ></LinesEllipsis>
              <Button 
                className={classes.LinesEllipsis}
                onClick={this.showChiTiet}
              >
                Xem Chi Tiết
              </Button>
              <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<AddIcon>send</AddIcon>}
            >
              Thêm công việc
            </Button>
            </CardContent>
            {/* Nội dung 2 */}
           
          </Card>
        </Grid>
      );
    });
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={10}>
          {this.renderDuAnDangLam()}
          {this.renderThongBao()}
          {this.renderKeHoach()}
        </Grid>
      </div>
    );
  }
}

Trangchu.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Trangchu);
