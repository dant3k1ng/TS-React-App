export const getWorkspaces = () => {
    return new Promise((resolve, reject) => {
        resolve(staticData)
    });
}

const staticData = [
    {
        title: "Client contract",
        userCount: 150,
        type: "Contract",
        backgroundImageUrl: "",
        image: "./img/icons/entities2.svg",
        lastUpdate: "2 days ago"
    },
    {
        title: "Supplier contract",
        userCount: 25,
        type: "Contract",
        backgroundImageUrl: "",
        image: "./img/icons/entities2.svg",
        lastUpdate: "2 days ago"
    },
    {
        title: "Corporate",
        userCount: 25,
        type: "Corporate",
        backgroundImageUrl: "",
        image: "./img/icons/entities2.svg",
        lastUpdate: "2 days ago"
    },
    {
        title: "Group Norms",
        userCount: 25,
        type: "Norms",
        backgroundImageUrl: "",
        image: "./img/icons/entities2.svg",
        lastUpdate: "2 days ago"
    },
    {
        title: "Real estate contracts",
        userCount: 150,
        type: "Contract",
        backgroundImageUrl: "",
        image: "./img/icons/entities2.svg",
        lastUpdate: "2 days ago"
    }
];