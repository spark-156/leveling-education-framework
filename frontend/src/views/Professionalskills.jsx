import React from "react"

import { Row, Col } from "antd";

import { Skill } from "../components/Skill"
import { rowStyle } from "../lib";

export default function Professionalskills() {
  return <>
    <Row style={rowStyle} gutter={[16, { xs: 8, sm: 16, md: 16, lg: 16 }]}>
      <Col span={24}>
        <div>Om een ICT-opdracht, bestaande uit een of meer ICT-beroepstaken, succesvol te kunnen uitvoeren, zijn samen met de vakinhoudelijke expertise ookprofessional skills vereist. Integraal onderdeel van deze skills is dat een ICT-professional leert van elke opdracht en op deze manier een eigen profielvoor het toekomstige werk ontwikkelt. ICT-beroepstaken, professional skills en persoonlijke ontwikkeling zijn daarbij onlosmakelijk met elkaarverbonden. Om dit alles te operationaliseren en te verbinden met de ICT-beroepstaken zijn de professional skills geformuleerd in vieraandachtsgebieden: toekomstgericht organiseren, onderzoekend probleemoplossen, persoonlijk leiderschap en doelgericht interacteren. De vieraandachtsgebieden overlappen elkaar en vullen elkaar aan.In de gekozen opzet is gestreefd naar herkenbaarheid, werkbaarheid, en overdraagbaarheid, zodat zowel onderwijs als bedrijfsleven ermee uit devoeten kunnen. De opzet is gebaseerd op de Dublin descriptoren, de hbo standaard, de resultaten van de HBO-i werkgroep ‘De Andere Skills’ en degedeelde visie op onderzoekend vermogen en probleem oplossen die vanuit verschillende hogescholen is opgebouwd (Andriessen et al., 2014; Losse,2016; Turnhout et al., 2013).Bij de uitvoering van elke ICT-beroepstaak zijn professional skills nodig om de opdracht tot een goed einde te brengen. De aandachtsgebieden van deprofessional skills zijn gelijk voor alle opdrachten. Het gedrag dat als professional skill nodig is om de ICT beroepstaken uit te kunnen voeren wordtverderop beschreven. Het niveau van deze skills wordt bepaald door het beheersingsniveau vereist vanuit de opdracht zoals elders per architectuurlaagen activiteit voor vier niveaus beschreven. Dit biedt mogelijkheden om het niveau van de skills in de loop van de opleiding te laten groeien. Op niveau 1zal de opdrachtgever bijvoorbeeld aangeven dat er een presentatie gegeven moet worden en wat de criteria daarvoor zijn, terwijl de student op niveau3 zelf moet bepalen welke vormen van communicatie het best passen in de context en dit kunnen verantwoorden.Er is bovendien ruimte voor profilering op het vereiste niveau van de skills door in de opdracht bijvoorbeeld meer nadruk te leggen op de(organisatorische) complexiteit van de context of juist op de (technische) complexiteit van de (vak)inhoud.Wat onder de professional skills wordt verstaan, is nader ingevuld door elk van de vier aandachtsgebieden in drie deelgebieden uit te werken.</div>
      </Col>
    </Row>
    <Skill
      title="Toekomstgericht organiseren"
      description="De organisatorische context van ICT-opdrachten verkennen, zakelijke, duurzame én ethische afwegingen maken en alle aspecten van de uitvoeringvan de opdracht managen."
      afzonderlijketaken={{
        Organisatorischecontext: "Identificeert kenmerken en rollen van de omgeving van de opdracht en kent de zakelijke legitimering.",
        Ethiek: "Kent ethische standaarden, betrekt maatschappelijk ethische thema’s in de oordeelsvorming, herkent eigen en andermans grenzenen handelt daarnaar.",
        Managen: "Inventariseert deeltaken, plant en bewaakt tijd, geld, kwaliteit en ethiek van de uitvoering van de werkzaamheden, herkent kansen enrisico’s en zorgt voor een toekomstgerichte inbedding van de oplossing in de organisatie."
      }}
    />
    <Skill
      title="Onderzoekend probleemoplossen"
      description="ICT-opdrachten kritisch vanuit verschillende perspectieven beschouwen, problemen identificeren, vinden van een effectieve aanpak en komen totpassende oplossingen."
      afzonderlijketaken={{
        Probleemaanpak: "Het identificeren van het probleem, richting van de oplossing bepalen en een passende aanpak kiezen.",
        Onderzoeken: "Gedurende het hele oplosproces nieuwsgierig zijn en vragen stellen vanuit verschillende perspectieven, deze vragen met eenpassende aanpak pragmatisch, kritisch en gebaseerd op bronnen beantwoorden.",
        Oplossen: "Het zowel methodisch als creatief problemen op kunnen lossen, het vinden van alternatieven en het kritisch de eigen en andermansredeneerketen kunnen doorlopen."
      }}
    />
    <Skill
      title="Persoonlijk leiderschap"
      description="Ondernemend zijn rond ICT-opdrachten en persoonlijke ontwikkeling, daarbij aandacht hebbend voor het eigen leervermogen en voor ogen houdendwat voor ICT-professional en/of welk type functies men ambieert."
      afzonderlijketaken={{
        "Ondernemend zijn": "Attent zijn, kansen zien en deze grijpen, zichzelf en anderen kunnen motiveren, zichzelf dan wel een team kunnen profileren, anderenmeenemen in de eigen ontwikkeling, leiderschap tonen en verantwoordelijkheid nemen.",
        "Persoonlijke ontwikkeling": "Een overwogen studiekeuze maken, het eigen leervermogen versterken, een leerbehoefte bij zichzelf kunnen onderkennen en daaroppassend acteren, reflecteren, evalueren, actief feedback vragen en geven.",
        "Persoonlijke profilering": "Onderzoeken wat voor type professional men op termijn zou willen zijn, welk beroepenveld en type functies men ambieert en hoe zichdaarin van anderen in de branche te onderscheiden."
      }}
    />
    <Skill
      title="Doelgericht interacteren"
      description="Bepalen welke partners een rol spelen bij de ICT-opdracht, constructief met hen samenwerken en passend communiceren gericht op de gewensteimpact."
      afzonderlijketaken={{
        Partners: "Aandacht voor de diverse groepen samenwerkingspartners zoals stakeholders, belangengroepen, eigen teamleden.",
        Communiceren: "Aandacht voor wat men wil communiceren met welke impact, de daarbij meest geschikte vorm en de daadwerkelijke uitvoering hiervan.",
        Samenwerken: "Aandacht voor de eigen rol in de context van de ICT-opdracht, taken herkennen en oppakken, anderen aanspreken, verrijking zoekenen vertrouwen opbouwen in een interdisciplinaire en interculturele context."
      }}
    />
  </>
}