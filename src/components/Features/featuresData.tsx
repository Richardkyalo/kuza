import { Feature } from "@/types/feature";
import Image from "next/image";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image src="/images/hero/hero1.jpg" alt="Project 1" className="fluid" width={500} height={500} />

    ),
    title: "Seeds And Seedlings",
    paragraph:
      "Access high-yield, disease-resistant seed varieties that are tailored to your region's climate. Our projects support the use of cutting-edge genetic research to boost your farm's productivity.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/hero/kukuplan.jpg" alt="Project 1" className="fluid" width={500} height={400} />

    ),
    title: "KukuPlan",
    paragraph:
    "Our chicken project exemplifies high-quality design in sustainable poultry farming. The well-structured chicken coops provide optimal living conditions, ensuring healthy and happy chickens. ",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/hero/hero2.jpg" alt="Project 1" className="fluid" width={500} height={400} />
    ),
    title: "Kitchen Farm",
    paragraph:
    "Our hydroponics project represents the pinnacle of sustainable agriculture. Using state-of-the-art hydroponic techniques, we cultivate plants in a nutrient-rich water solution, without the need for soil. ",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/hero/kukuplan.jpg" alt="Project 1" className="fluid" width={500} height={400} />

    ),
    title: "Kukuplan",
    paragraph:
  "Our chicken project exemplifies high-quality design in sustainable poultry farming. The well-structured chicken coops provide optimal living conditions, ensuring healthy and happy chickens. ",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/hero/hero2.jpg" alt="Project 1" className="fluid" width={500} height={400}/>

    ),
    title: "Kitchen Farm",
    paragraph:
    "Our hydroponics project represents the pinnacle of sustainable agriculture. Using state-of-the-art hydroponic techniques, we cultivate plants in a nutrient-rich water solution, without the need for soil. ",
 },
  {
    id: 1,
    icon: (
      <Image src="/images/hero/hero1.jpg" alt="Project 1" className="fluid" width={500} height={400} />

    ),
    title: "Seeds And Seedlings",
    paragraph:
   "Access high-yield, disease-resistant seed varieties that are tailored to your region's climate. Our projects support the use of cutting-edge genetic research to boost your farm's productivity.",
  },
];
export default featuresData;
