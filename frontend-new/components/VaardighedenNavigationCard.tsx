import { NavigationCard } from "./NavigationCard";
import { FormattedMessage } from "react-intl";
import { NavigationCardButton } from "./NavigationCardButton";

export function VaardighedenNavigationCard() {
  const vaardigheden = [
    "juiste_kennis_ontwikkelen",
    "kwalitatief_product_maken",
    "overzicht_creeren",
    "kritisch_oordelen",
    "samenwerken",
    "boodschap_delen",
    "plannen",
    "flexibel_opstellen",
    "pro-actief_handelen",
    "reflecteren",
  ];
  return (
    <NavigationCard
      title={<FormattedMessage id="SKILLS" />}
      subheader={<FormattedMessage id="SKILLS_SUBHEADER" />}
    >
      {vaardigheden.map((vaardigheid) => (
        <NavigationCardButton
          key={vaardigheid}
          title={<FormattedMessage id={vaardigheid} />}
          query_param_key="vaardigheid"
          query_param_value={vaardigheid}
        />
      ))}
    </NavigationCard>
  );
}
