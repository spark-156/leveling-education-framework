export type BeroepstakenOrVaardigheden = {
  [key: string]: BeroepstaakOrVaardigheid;
};

export type BeroepstaakOrVaardigheid = {
  [key: string]: {
    title: string;
    info: string;
  };
};
