import Box from '@mui/material/Box';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from '@mui/material';
import { Typography } from '@mui/joy';
import ModalClose from '@mui/joy/ModalClose'

function LeftDrawer({ toggleDrawer, state }) {

    return (
        <div>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                sx={{
                    "& .MuiDrawer-content": {
                        bgcolor: "#73a8bce7",
                        color: "white",
                        paddingTop: "7vh"
                    }
                }}>
                <ModalClose
                    size="lg"
                    sx={{
                        borderRadius: "50%",
                        "&:hover": {
                            bgcolor: "blueviolet",
                            color: 'white'
                        }
                    }}
                />
                <Typography
                    level="h1"
                    sx={{
                        fontFamily: "Montserrat",
                        color: "blueviolet",
                        textAlign: "center",
                        fontWeight: 500,
                        mb: "20px",

                    }}>
                    STORE
                </Typography>
                <Box
                    sx={{ width: "70vw" }}
                    role="presentation"
                    onClick={toggleDrawer("left", false)}
                    onKeyDown={toggleDrawer("left", false)}
                >
                    <List>
                        {['All', 'Fish', 'Invertebrate', 'Coral', 'Decoration'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    sx={{
                                        justifyContent: "flex-start",
                                        padding: "16px 30px",
                                        borderBottom: "1px solid blueviolet"
                                    }}
                                >
                                    <Link
                                        href={text === "All" ? "/store" : `/${text.toLowerCase()}`}
                                        underline="none"
                                        sx={{
                                            fontSize: "1.4rem",
                                            fontFamily: "Montserrat",
                                            color: "white",
                                        }}
                                    >
                                        {text.toUpperCase()}
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );

}

export default LeftDrawer;