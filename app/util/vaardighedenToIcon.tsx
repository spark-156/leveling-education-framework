import {
    AccessibilityNew,
    Announcement,
    Biotech, Build,
    CalendarMonth, Chat,
    CoPresent, DesignServices, DirectionsRun, Domain,
    Explore,
    Handshake, Laptop, Memory,
    MenuBook, Psychology, SmartButton, Storage, Tune
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

export function getIcon(query_param_value: string) {
    switch(query_param_value) {
        case "Juiste kennis ontwikkelen":
            return (<MenuBook sx={{fontSize: 48}} />)
        case "Kwalitatief product maken":
            return (<Biotech sx={{fontSize: 48}} />)
        case "Overzicht creëren":
            return (<Explore sx={{fontSize: 48}} />)
        case "Kritisch oordelen":
            return (<Announcement sx={{fontSize: 48}} />)
        case "Samenwerken":
            return (<Handshake sx={{fontSize: 48}} />)
        case "Boodschap delen":
            return (<CoPresent sx={{fontSize: 48}} />)
        case "Plannen":
            return (<CalendarMonth sx={{fontSize: 48}} />)
        case "Flexibel opstellen":
            return (<AccessibilityNew sx={{fontSize: 48}} />)
        case "Pro-actief handelen":
            return (<DirectionsRun sx={{fontSize: 48}} />)
        case "Reflecteren":
            return (<Psychology sx={{fontSize: 48}} />)
            // architectuurlaag
        case "Gebruikersinteractie":
            return (<SmartButton sx={{fontSize: 48}} />)
        case "Organisatieprocessen":
            return (<Domain sx={{fontSize: 48}} />)
        case "Infrastructuur":
            return (<Storage sx={{fontSize: 48}} />)
        case "Software":
            return (<Laptop sx={{fontSize: 48}} />)
        case "Hardwareinterfacing":
            return (<Memory sx={{fontSize: 48}} />)
            // activiteit
        case "Analyseren":
            return (<Biotech sx={{fontSize: 48}} />)
        case "Adviseren":
            return (<Chat sx={{fontSize: 48}} />)
        case "Ontwerpen":
            return (<DesignServices sx={{fontSize: 48}} />)
        case "Realiseren":
            return (<Build sx={{fontSize: 48}} />)
        case "Manage & Control":
            return (<Tune sx={{fontSize: 48}} />)
        default:
            return (<MenuIcon sx={{fontSize: 48}} />)

    }
}