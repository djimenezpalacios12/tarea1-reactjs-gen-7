import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { InsertChart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Bar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <InsertChart className="mr-2" />
        <Typography variant="h6">Dashboard de Proyectos</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Bar;
