type GroupId = 'home' | 'other';

type Group = {
    id: GroupId
    name: string;
    color: string;
    img: string;
}

interface Item {
    id: string;
    name: string;
    sum: number;
    groupId: GroupId;
    date: Date;
}


const groups = [
    {
        id: 'home',
        name: 'дома',
        color: 'blue',
        img: 'svg'
    },
    {
        id: 'other',
        color: 'green',
        name: 'Остально',
        img: 'svg'
    },
]

const list: Item[] = [{
    id: '1',
    name: 'Кофе',
    sum: -100, 
    groupId: 'home',
    date: new Date()
},{
    id: '2',
    name: 'Отадали долг',
    sum: 2000,
    groupId: 'other',
    date: new Date()
},
{
    id: '3',
    name: 'Кофе',
    sum: -100,
    groupId: 'home',
    date: new Date()
}];