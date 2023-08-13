import { createTheme } from "@mui/material";

export const themes = createTheme ({
    palette:{
        primary:{
            main: "#154c79",
            light: "#1b75b8",
        },
        secondary:{
            main: "#155596",
            light: "white",
        },
        otherColor:{
            main: "999",
        },
    },

    breakpoints:{
        values:{
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
            xl: 1536,
        }
    },
})