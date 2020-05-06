import React , {useState} from 'react';
import { Card, 
        CardHeader, 
        CardMedia, 
        CardContent,
        CardActionArea } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProfileDetail from '../../../components/ProfileDetail/ProfileDetail';


const useStyles = makeStyles((theme) => ({
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
    // margin: {
    //     margin: theme.spacing(1),
    //     background : '#9b5de5',
    //     '&:hover': {
    //         backgroundColor: '#c77dff',
    //         color: '#FFF'
    //     }
    // },
    profileDetailsContainer: {
        marginTop: '2em',
    },

  }));

function Profile () {
    const [ isEditting , setIsEditting ] = useState(false);
    const classes = useStyles();
    const cardMediaContent = () => (
        <img   
            className={classes.photo} 
            alt='user' 
            src='https://www.w3schools.com/howto/img_avatar.png'
        />
    )

    return (
             <Card className={classes.root}>
                 <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image='https://marketplace.canva.com/EAD297uecnM/2/0/1600w/canva-rainbow-gradient-pink-orange-and-blue-zoom-virtual-background-VwJMC37j5jQ.jpg'
                    children={cardMediaContent()}
                    >  
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
                        <div className={classes.profileDetailsContainer}>
                            <ProfileDetail />
                            <ProfileDetail />
                        </div>
                    </CardContent>
                    {/* <Button 
                    variant="contained" 
                    color="primary"
                    size="medium"
                    className={classes.margin}
                    >
                        Edit
                    </Button> */}
                </CardActionArea>
            </Card>
    )
}

export default Profile