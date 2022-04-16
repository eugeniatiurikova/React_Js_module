import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

const MessagesField = ({ handleSubmit, messages, msgauthor, setMsgauthor, messagetext, setMessagetext, deleteMessage }) => (
    <Stack sx={{ margin: '10px 0 10px 0' }}
        direction="column"
        spacing={2}
    >
        <Box
            component="form" className='messagetext'
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
                required fullWidth
                id="outlined-required"
                label="Author name"
                value={msgauthor} onChange={(e) => setMsgauthor(e.target.value)}
            />
            <TextField sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
                id="outlined-multiline-flexible" fullWidth
                label="Message text"
                multiline
                value={messagetext}
                onChange={(e) => setMessagetext(e.target.value)}
            />
            <Button sx={{ margin: '10px 0 10px 0' }} variant="contained" size="large" fullWidth type='submit'>Send message</Button>
        </Box>

        <Box className="messagetext">
            <Typography variant="h5" color="primary">Messages</Typography>
            {messages.map(item => {
                return (
                    <Card sx={{ margin: '20px 0 20px 0', backgroundColor: 'background.paper' }} key={item.id}>
                        <CardContent>
                            <Stack sx={{ margin: '0 0 10px 0' }}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={1}
                            ><Typography variant="h6" color="primary">{item.author}:</Typography><IconButton size="small" onClick={() => deleteMessage(item.id)}><DeleteOutlinedIcon /></IconButton></Stack>
                            <Typography variant="body2">«{item.body}»</Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </Box>
    </Stack >
);

export default MessagesField;