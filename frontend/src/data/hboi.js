/*
This is a one to one copy of https://www.hbo-i.nl/publicaties-domeinbeschrijving/ pdf edition 2018 release
*/
import * as importedHboi from '../json/hboi.json';
const hboi = importedHboi['default']

const architectuurlagen = ["Gebruikersinteractie", "Organisatieprocessen", "Infrastructuur", "Software", "Hardwareinterfacing"]

const activiteiten = ["Analyseren", "Adviseren", "Ontwerpen", "Realiseren", "Manage & Control"]

const activiteitenPointer = {
    [activiteiten[0]]: [hboi["Gebruikersinteractie Analyseren"], hboi["Organisatieprocessen Analyseren"], hboi["Infrastructuur Analyseren"], hboi["Software Analyseren"], hboi["Hardwareinterfacing Analyseren"]],
    [activiteiten[1]]: [hboi["Gebruikersinteractie Adviseren"], hboi["Organisatieprocessen Adviseren"], hboi["Infrastructuur Adviseren"], hboi["Software Adviseren"], hboi["Hardwareinterfacing Adviseren"]],
    [activiteiten[2]]: [hboi["Gebruikersinteractie Ontwerpen"], hboi["Organisatieprocessen Ontwerpen"], hboi["Infrastructuur Ontwerpen"], hboi["Software Ontwerpen"], hboi["Hardwareinterfacing Ontwerpen"]],
    [activiteiten[3]]: [hboi["Gebruikersinteractie Realiseren"], hboi["Organisatieprocessen Realiseren"], hboi["Infrastructuur Realiseren"], hboi["Software Realiseren"], hboi["Hardwareinterfacing Realiseren"]],
    [activiteiten[4]]: [hboi["Gebruikersinteractie Manage & Control"], hboi["Organisatieprocessen Manage & Control"], hboi["Infrastructuur Manage & Control"], hboi["Software Manage & Control"], hboi["Hardwareinterfacing Manage & Control"]]
}
const architectuurlagenPointer = {
    [architectuurlagen[0]]: [hboi["Gebruikersinteractie Analyseren"], hboi["Gebruikersinteractie Adviseren"], hboi["Gebruikersinteractie Ontwerpen"], hboi["Gebruikersinteractie Realiseren"], hboi["Gebruikersinteractie Manage & Control"]],
    [architectuurlagen[1]]: [hboi["Organisatieprocessen Analyseren"], hboi["Organisatieprocessen Adviseren"], hboi["Organisatieprocessen Ontwerpen"], hboi["Organisatieprocessen Realiseren"], hboi["Organisatieprocessen Manage & Control"]],
    [architectuurlagen[2]]: [hboi["Infrastructuur Analyseren"], hboi["Infrastructuur Adviseren"], hboi["Infrastructuur Ontwerpen"], hboi["Infrastructuur Realiseren"], hboi["Infrastructuur Manage & Control"]],
    [architectuurlagen[3]]: [hboi["Software Analyseren"], hboi["Software Adviseren"], hboi["Software Ontwerpen"], hboi["Software Realiseren"], hboi["Software Manage & Control"]],
    [architectuurlagen[4]]: [hboi["Hardwareinterfacing Analyseren"], hboi["Hardwareinterfacing Adviseren"], hboi["Hardwareinterfacing Ontwerpen"], hboi["Hardwareinterfacing Realiseren"], hboi["Hardwareinterfacing Manage & Control"]]
}

const beheersingsniveaus = {
    "Zelfstandigheid": {
        "Taakgericht": "Werkt onder algemene richtlijnen in een omgeving waar onvoorspelbare veranderingen plaatsvinden.",
        "Probleemgericht": "Lost zelfstandig interactieve kwesties op die voortvloeien uit projectactiviteniten.",
        "Situatiegericht": "Werkt onafhankelijk om interactieve problemen op te lossen. Heeft een positief eff ect op de teamprestaties.",
        "Professiegericht": "Coördineert en bestuurt. Stelt kwesties aan de orde met veel interacterende factoren."
    },
    "Complexiteit": {
        "Taakgericht": {
            context: "Gestructureerd voorspelbare context, probleem afgebakend, aanpak en oplossing bekend bij opdrachtgever.",
            inhoud: "Enkele basisconcepten dievoortbouwen op de vooropleiding."
        },
        "Probleemgericht": {
            context: "Gestructureerd - onvoorspelbare context, probleem gegeven, keuze aanpak en oplossingsruimte beperkt.",
            inhoud: "Combinatie van meerderebasisconcepten en enkeleverdiepende concepten dievoortbouwen op basisconcepten."
        },
        "Situatiegericht": {
            context: "Gestructureerd – onvoorspelbare context, vage problemen, aanpak en oplossingsruimte open.",
            inhoud: "Combinatie van meerdere conceptenvoor verdieping en innovatie in delokale situatie."
        },
        "Professiegericht": {
            context: "Ongestructureerde multidisciplinaire en/of specialistische context.",
            inhoud: "Nieuwe concepten voor verdiepingen innovatie die transfereerbaar zijnnaar andere situaties."
        },
    }
}

export { 
    hboi,
    beheersingsniveaus,
    architectuurlagen,
    architectuurlagenPointer,
    activiteiten,
    activiteitenPointer
}
