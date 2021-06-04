import { IEntity } from "../entities/Entity";

export const getEntities = (): Promise<IEntity[]> => {
    return new Promise((resolve, reject) => {
        resolve(staticData)
    });
}

const staticData = [
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem1.jpg",
    },
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem2.jpg",
    },
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem3.jpg",
    },
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem4.jpg",
    },
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem5.jpg",
    },
    //
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem1.jpg",
    },
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem2.jpg",
    },
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem3.jpg",
    },
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem4.jpg",
    },
    {
        title: "World company SAS",
        description: "Caracas 1050, Distrito Capital, Venezuela",
        imageUrl: "img/entity/emblem5.jpg",
    },
    //
];