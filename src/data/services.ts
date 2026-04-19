export interface Service {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "banho",
    label: "Banho",
    description: "Banho completo com produtos especiais para pets",
    icon: "🛁",
  },
  {
    id: "tosa",
    label: "Tosa",
    description: "Tosa higiênica ou completa para cães e gatos",
    icon: "✂️",
  },
  {
    id: "consulta",
    label: "Consulta Veterinária",
    description: "Atendimento com veterinário especializado",
    icon: "🩺",
  },
  {
    id: "vacina",
    label: "Vacinação",
    description: "Vacinas essenciais para a saúde do seu pet",
    icon: "💉",
  },
  {
    id: "hospedagem",
    label: "Hospedagem",
    description: "Cuidado e conforto enquanto você viaja",
    icon: "🏠",
  },
];