import gamora from '../img/gamora.png'
import drax from '../img/drax.jpg'
import groot from '../img/groot.jpeg'
import rocket from '../img/rocket.png'
import profile from '../img/starlord.png'

export const mockGroup = {
    id: '2qyFiq94hbnQ92',
    name: 'Guardians of the Galaxy',
    description: 'Kick Galaxy butt',
    members: [
        {
            name: 'Starlord',
            photo: profile
        },
        {
            name: 'Gamora',
            photo: gamora
        },
        {
            name: 'Drax',
            photo: drax
        },
        {
            name: 'Groot',
            photo: groot
        },
        {
            name: 'Rocket',
            photo: rocket
        },
    ],
    goals: [
        {
            id: 'yass',
            createdAt: '05/10/2001',
            createdBy: 'Rocket',
            completed: true,
            description: 'Find nappies for Groot',
            deadline: '02/11/2001',
            comments: [
                {
                    publishedBy: 'Gamora',
                    date: '11/24/2001',
                    text: "We're using this to set goals, not manage chores!"
                },
                {
                    publishedBy: 'Rocket',
                    date: '11/25/2001',
                    text: 'Bite me, what size is Groot?'
                },
                {
                    publishedBy: 'Groot',
                    date: '11/26/2001',
                    text: 'I am Groot'
                },
                {
                    publishedBy: 'Drax',
                    date: '11/26/2001',
                    text: 'He is an extra large'
                },
                {
                    publishedBy: 'Rocket',
                    date: '11/26/2001',
                    text: "What, no he isn't"
                },
                {
                    publishedBy: 'Gamora',
                    date: '11/27/2001',
                    text: "XS should be fine"
                },
            ]
        },
        {
            id: 'yooo',
            createdAt: '05/10/2001',
            createdBy: 'Groot',
            completed: true,
            description: 'I am Groot',
            deadline: '04/15/2001',
            comments: [
                {
                    publishedBy: 'Groot',
                    date: '04/26/2001',
                    text: "I am Groot"
                },
                {
                    publishedBy: 'Groot',
                    date: '05/05/2001',
                    text: "I am Groot"
                },
                {
                    publishedBy: 'Rocket',
                    date: '10/05/2001',
                    text: "You better get this one done soon Groot, times a runnin"
                },
                {
                    publishedBy: 'Groot',
                    date: '10/05/2001',
                    text: "!!!!!!!"
                },
            ]
        },
        {
            id: 'taaa',
            createdAt: '07/02/2002',
            createdBy: 'Drax',
            completed: false,
            description: 'Find and destroy Thanos',
            deadline: '05/15/2001',
            comments: [
                {
                    publishedBy: 'Starlord',
                    date: '01/17/2001',
                    text: 'Thats a big goal you got there buddy'
                },
                {
                    publishedBy: 'Rocket',
                    date: '01/17/2001',
                    text: "Insane right? Better chance of running into a Norse god."
                }
            ]
        }
    ],
    messages: [
        {
            id: Date.now() + 1,
            user: 'Starlord',
            text: "What's for Lunch?",
            createdAt: '04/20/2001'
        },
        {
            id: Date.now() + 5,
            user: 'Drax',
            text: 'The blood of Thanos I hope',
            createdAt: '04/23/2001'
        },
        {
            id: Date.now() + 4,
            user: 'Rocket',
            text: "Uhh yeahh I'll stick with carrots",
            createdAt: '04/24/2001'
        },
        {
            id: Date.now() + 6,
            user: 'Gamora',
            text: 'Seriously, can we start using this app appropriately?!',
            createdAt: '04/24/2001'
        }
    ]
}