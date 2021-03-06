import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import "./style.css"
import { SocialIcon } from 'react-social-icons';
import { Grid } from "@mui/material"

function DescricaoWrite() {


    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    useEffect(() => {

        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #00b8ff}";
        document.body.appendChild(css);
    })


    return (
        <Box >
            <Grid container direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0}
            >

                <Grid item xs={12} sm={8} md={8} lg={6}
                    sx={{
                        marginLeft: "10%",
                        marginTop: "10%",
                    }}>
                    <Typography style={{ color: "#00b8ff", fontSize: 14 }}>OL??, MEU NOME ??</Typography>
                    <Typography variant="h3" component="h1" style={{ color: "#e2e9ff", marginBottom: 13 }}><strong>Matheus Castro Oliveira</strong></Typography>


                    <h3 className="dev" >
                        <div><strong>Desenvolvedor</strong> </div>

                        <div className="typewrite" data-period="2000" data-type='[ " Back-end.", " Front-end.", " Fullstack." ]'>
                            <span className="wrap"></span>
                        </div>
                    </h3>
                    <Typography>
                        Sou desenvolvedor back-end em .Net e front-end em HTML, CSS, javaScript
                        e mais recentemente adotei o React.js como principal framework para front-end, tanto em projetos pessoais quanto no trabalho.
                    </Typography>

                    <SocialIcon url="https://github.com/mcastro161096" target="_blank" bgColor="#181818" fgColor="#fff" title="GitHub" style={{ width: 40, height: 40, margin: 5 }} />
                    <SocialIcon url="https://www.linkedin.com/in/matheus-castro-oliveira/" target="_blank" fgColor="#fff" title="LinkedIn" style={{ width: 40, height: 40, margin: 5 }} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default DescricaoWrite;