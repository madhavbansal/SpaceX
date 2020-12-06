import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { constants } from '../utils/constant';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const getMissionIdList = (ids = []) => {
  return (
    <ul>
      {ids.map(id => <li key={id}>{id}</li>)}
    </ul>

  )
}


const MissionCard = (props) => {
  const { data: {
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    launch_success,
    cores,
    mission_patch,
    mission_patch_small } = {},
    style } = props;
  const classes = useStyles();
  const missionIdList = getMissionIdList(mission_id);
  const successfulLanding = !!(cores.length && cores[0].land_success)
  return (

    <Card style={style}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mission_patch_small}
          title="Contemplative Reptile"
          style={{ backgroundSize: 'contain', padding: '50px', backgroundColor: 'lightgray' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <div style={{ color: "#5d68a0" }}>{mission_name}#{flight_number}</div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div style={{ fontWeight: 'bold', color: 'black' }}>{constants.missionIds}</div><div style={{color:'#5d68a0'}}>{missionIdList}</div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div style={{ fontWeight: 'bold', color: 'black' }}>{constants.launchYear}</div><div style={{color:'#5d68a0'}}>{launch_year}</div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div style={{ fontWeight: 'bold', color: 'black' }}>{constants.successfulLaunch}</div><div style={{color:'#5d68a0'}}>{launch_success ? "true" : "false"}</div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div style={{ fontWeight: 'bold', color: 'black' }}>{constants.successfulLanding}</div><div style={{color:'#5d68a0'}}>{successfulLanding ? "true" : "false"}</div> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )


}
export default MissionCard;