import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import Typewriter from "typewriter-effect";
function DescricaoWrite() {

    return (
        <Box sx={{
            width: 600,
            height: 300,
            marginLeft: 20,
            marginTop: 20
        }}>
            <Typography style={{ color: "#00b8ff", fontSize: 14 }}>OLÁ, MEU NOME É</Typography>
            <Typography variant="h3" component="h1" style={{ color: "#e2e9ff", fontSize: 48 }}><strong>Matheus Castro Oliveira</strong></Typography>
            <Typography id="t" style={{ color: "#e2e9ff", fontSize: 25 }}>
                <strong>Desenvolvedor</strong>
                    <Typewriter options={{loop: true}} onInit={(typewriter) => {
                    typewriter.typeString("Back-end")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Fullstack")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Front-end")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }} />
            </Typography>
        </Box>
    );
}

export default DescricaoWrite;