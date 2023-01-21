import { BeroepstakenOrVaardigheden } from "../types/BeroepstakenOrVaardigheden";
import { Skill, skills } from "../types/Vaardigheid";

export function filterVaardigheden(
  vaardigheden: BeroepstakenOrVaardigheden,
  { vaardigheid }: { vaardigheid?: string }
) {
  let filteredVaardigheden = vaardigheden;

  if (vaardigheid && skills.includes(vaardigheid as Skill)) {
    filteredVaardigheden = {};
    filteredVaardigheden[vaardigheid] = vaardigheden[vaardigheid];
  }

  return filteredVaardigheden;
}
