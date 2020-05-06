import React , {useState} from 'react';
import { Card, 
        CardHeader, 
        CardMedia, 
        CardContent,
        CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProfileDetail from '../../../components/ProfileDetail/ProfileDetail';


const useStyles = makeStyles({
    root: {
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(192,192,192,0.3)',
      margin: '0 auto',
      width: '73.5%',
      textAlign: 'center',
    },
    media: {
        position: 'relative',
        left: 0,
        height: 0,
        padding: '15%',
      },
    header: {
        fontWeight: 'bold',
    },
    photo: {
        borderRadius: '50%',
        position: 'absolute',
        top: '90px',
        left: '370px',
        width:'20%',
    },

  });

function Profile () {
    const [ isEditting , setIsEditting ] = useState(false);
    const classes = useStyles();

    return (
             <Card className={classes.root}>
                 <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image='https://marketplace.canva.com/EAD297uecnM/2/0/1600w/canva-rainbow-gradient-pink-orange-and-blue-zoom-virtual-background-VwJMC37j5jQ.jpg'
                    >  
                    <img   
                        className={classes.photo} 
                        alt='user' 
                        src='https://www.w3schools.com/howto/img_avatar.png'
                    />
                    </CardMedia>
                    <CardHeader
                        title='UserName'
                    />
                    <CardContent>
                        <Typography 
                            variant="body1" 
                            color="textSecondary" 
                            component="p">
                            Hello, my name is blank! I like doing blank stuff. 
                            A pretty cool person Hello, my name is blank! I like doing blank stuff. 
                            A pretty cool person Hello, my name is blank! I like doing blank stuff. 
                            A pretty cool person
                        </Typography>
                        <br/>
                        <div className='profileDetailsContainer'>
                            <ProfileDetail />
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default Profile