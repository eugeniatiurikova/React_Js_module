import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Message = ({ author, text }) => {
    return (
        <div className="messagetext">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div" color="primary">{author}:</Typography>
                    <Typography variant="body2">«{text}»</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Message;