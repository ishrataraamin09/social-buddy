import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Posts = (props) => {
    const classes = useStyles();

    const {userId, id, title, body} = props.post ;
    const history = useHistory() ;
    const handleClick = (postId) => {
        history.push(`/post/${postId}`)
    }
    
    return (
        <Card className={classes.root} variant="outlined">
          <CardContent>
             <Typography className={classes.title} color="textSecondary" gutterBottom>
               Title is: {title}
            </Typography>
             <Typography className={classes.pos} color="textPrimary">
               Description: {body}
            </Typography>
          </CardContent>
        <CardActions>
         <Link to={`/post/${id}`}>
            <Button size="small" color="secondary" onClick={() => handleClick(id)}>show details of ID: {id}
            </Button></Link>
       </CardActions>
    </Card>
    );
};

export default Posts;