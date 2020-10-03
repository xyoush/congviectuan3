import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Lock } from "@material-ui/icons";
import clsx from "clsx";
import PersonIcon from "@material-ui/icons/Person";
import React, { Component } from "react";
import styles from "./styles";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

class Dangnhap extends Component {
  state = {
    identifier: "",
    password: "",
  }; //state để lưu dữ liệu

  render() {
    const { classes } = this.props;
    const { identifier, password } = this.state;
    const LOGIN_MUTATION = gql`
      mutation Login($input: UsersPermissionsLoginInput!) {
        login(input: $input) {
          jwt
          user {
            id
            email
            username
            confirmed
            blocked
            role {
              id
              name
              description
              type
            }
          }
        }
      }
    `; //mutation của login, khi submit thì mutation này sẽ được gọi
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card className={classes.card}>
            <div className={classes.root}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <img
                    src="https://i.imgur.com/JcpwBZU.png"
                    width="100%"
                    className={classes.imglogo}
                  ></img>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CardContent>
                    <form className={classes.form} autoComplete="off">
                      <div className={clsx(classes.editInput)}>
                        <Typography
                          gutterBottom
                          component="h1"
                          className={classes.Typo}
                        >
                          ĐĂNG NHẬP
                        </Typography>
                        <label className={classes.set}>Tài Khoản</label>
                        <TextField
                          id="username"
                          type="text"
                          required
                          fullWidth
                          placeholder="Nhập Tài Khoản..."
                          value={identifier} // lấy value cho variables
                          onChange={e =>
                            this.setState({ identifier: e.target.value })
                          }
                          InputProps={{
                            className: classes.user,
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <label className={classes.set}>Mật Khẩu</label>
                        <TextField
                          classes={{
                            text: classes.inputRoot,
                            input: classes.inputInput,
                          }}
                          id="password"
                          required
                          fullWidth
                          type="password"
                          placeholder="Nhập Mật Khẩu..."
                          value={password} // lấy value cho variables
                          onChange={e =>
                            this.setState({ password: e.target.value })
                          }
                          InputProps={{
                            className: classes.pass,
                            startAdornment: (
                              <InputAdornment position="start">
                                <Lock />
                              </InputAdornment>
                            ),
                          }}
                        />

                        <Mutation
                          mutation={LOGIN_MUTATION} //
                          variables={{ input: { identifier, password } }}
                          onCompleted={() =>
                            this.props.history.push("/Trangchu")
                          }
                        >
                          {/* khi login thành công thì sẽ push/chuyển hướng sang quanlycongviec */}

                          {mutation => (
                            <Button
                              onClick={mutation}
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.button}
                            >
                              Đăng Nhập
                            </Button>
                          )}
                          {/* ở trên dùng render props để có thể dùng component Button trong component Mutation */}
                        </Mutation>

                        <a href="/#" className={classes.a}>
                          <Typography className={classes.Fpass}>
                            Quên Mật Khẩu ?
                          </Typography>
                        </a>
                      </div>
                    </form>
                  </CardContent>
                </Grid>
              </Grid>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Dangnhap);
