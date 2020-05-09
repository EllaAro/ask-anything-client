import React from 'react'; 
import { Paper } from '@material-ui/core';
import {useStylesPaper} from '../../theme'

const FullPost = (props) => {

    return (
        <Paper elevation={4} clasName={useStylesPaper().rootPaper}>
            <div>
            HIHI THIS IS THE ID {props.id}
            </div>
        </Paper>
    )
}

export default FullPost