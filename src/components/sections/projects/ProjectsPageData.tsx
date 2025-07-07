
import { AceUpBlockchain, CentralContact, Esagnde, RecLogistics } from "./ComposantsProject";

/*
type Project = {
  societe: string;
  desc: JSX.Element;
  logoSrc: string;
  imgSrc: string;
  lien: string;
};
*/

export const projectsMineWeb = {
  client: [
    {
      societe: "ESAG NDE",
      desc: <Esagnde />,
      logoSrc: "/assets/logo/logoesag.png",
      imgSrc: "/assets/images/esag.webp",
      lien: "https://esagnde.org/",
    },
    {
      societe: "REC LOGISTICS",
      desc: <Esagnde />,
      logoSrc: "/assets/logo/logorec.png",
      imgSrc: "/assets/images/rec.webp",
      lien: "https://reclogistics.com/",
    },
    {
      societe: "228 NEWS",
      desc: <Esagnde />,
      logoSrc: "/assets/logo/logo228.png",
      imgSrc: "/assets/images/228.webp",
      lien: "https://228news.tg/",
    },
    {
      societe: "RELOCATION SERVICES",
      desc: <Esagnde />,
      logoSrc: "/assets/logo/logorelocation.png",
      imgSrc: "/assets/images/relocationservice.webp",
      lien: "https://relocationserviceyenke.com/",
    },
    {
      societe: "YEMAG",
      desc: <Esagnde />,
      logoSrc: "/assets/logo/logoyemag.jpg",
      imgSrc: "/assets/images/yemag.webp",
      lien: "https://yemag-uni.org/",
    },
    {
      societe: "SOEURS NDE TOGO",
      desc: <Esagnde />,
      logoSrc: "/assets/logo/logosrnde.png",
      imgSrc: "/assets/images/srnde.webp",
      lien: "https://soeurndetogo.com/",
    },
    {
      societe: "ROBUSTE CONSULTING",
      desc: <Esagnde />,
      logoSrc: "/assets/logo/logorobuste.png",
      imgSrc: "/assets/images/robuste.webp",
      lien: "https://robusteconsulte.com/",
    },
    {
      societe: "7e CONGRÈS UEMOA",
      desc: <Esagnde />,
      logoSrc: "/assets/logo/logouemoa.png",
      imgSrc: "/assets/images/7oneccauemoa.webp",
      lien: "https://7oneccauemoa2025.com/",
    },
  ],
};

export const projectsMineMobile = {
  client: [
    {
      societe: "REC CONTAINER TRACKING",
      component: <RecLogistics />,
      description : "Application mobile de suivi de conteneurs",
      logoSrc: "/assets/logo/logoreccontainertracking.png",
      imgSrc: "/assets/images/reccontainertracking.png",
    },
    {
      societe: "ACE UP BLOCKCHAIN",
      component: <AceUpBlockchain />,
      description : "Portefeuille electronique de transactions blockchain",
      logoSrc: "/assets/logo/logoaceupblockchain.png",
      imgSrc: "/assets/images/aceUpBlockchain.png",
    },
    {
      societe: "CENTRAL CONTACT",
      component: <CentralContact />,
      description : "Application pour enregistrer des contacts de prospects",
      logoSrc: "/assets/logo/logocentralcontact.png",
      imgSrc: "/assets/images/centralContact.png",
    },
  ],
};
