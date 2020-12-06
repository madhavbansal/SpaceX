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
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <div style={{ color: "purple"}}>{mission_name}#{flight_number}</div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div style={{ fontWeight: 'bold', color: 'black' }}> {constants.missionIds}</div>{missionIdList}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div style={{ fontWeight: 'bold', color: 'black' }}>{constants.launchYear}</div>{launch_year}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div style={{ fontWeight: 'bold', color: 'black' }}>{constants.successfulLaunch}</div>{launch_success ? "true" : "false"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div style={{ fontWeight: 'bold', color: 'black' }}> {constants.successfulLanding}</div>{successfulLanding ? "true" : "false"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )


}
export default MissionCard;