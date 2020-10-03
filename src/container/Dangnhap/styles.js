const styles = (theme) => ({
  background: {
    // backgroundColor: theme.palette.primary.main,
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flex: " 1 0 auto",
    backgroundSize : '100%',
    backgroundImage : `URL(${'https://i.imgur.com/1APtkWb.jpeg'})`,
  },
  editInput : {
   
    marginTop: '50px',
  },
  imglogo:{
    marginTop: '50px',
  },
  card : {
    borderRadius : (12,12,12,12),
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    background  : 'WHITE',
    maxWidth : '750px',
    height: '400px',
 
  },
  typo: {
    textAlign: "center",
    fontSize: "20px",
    // color : 'white',
  },
  root: {
    flexGrow: 1,
  },
  image: {
    marginTop : '-50px',
    display : 'block',
    marginLeft : 'auto',
    marginRight : 'auto',
    height: '70px',
    width: "70px",
  },
  set : {
    color : 'BLACK',
  },
  Fpass : {
    paddingTop : '20px',
    textAlign: "center",
    fontSize: "13px",
    color : 'grey',
  },
  a : {
    textDecoration : 'none',
  },
  button : {
    marginTop : '10px',
    borderRadius:'20px',
  },
  user : {
    marginTop : '10px',
    // color: 'white',
    marginBottom : '15px'
  },
  pass : {
    marginTop : '10px',
    // color: 'white',
    marginBottom : '20px'
  },
  Typo : {
    fontWeight : 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default styles;