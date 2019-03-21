import React, {Component} from "react";
import Terminal from 'terminal-in-react';

class ReactTerminal extends Component {

    render(){
        const {onChangePacmanCommand} = this.props;

        return (
            <Terminal
                color='green'
                backgroundColor='black'
                style={{ fontWeight: "bold", fontSize: "1em", border: "1px solid", height: 'auto' }}
                commands={{
                    PLACE: {
                        method: (args, print, runCommand) => {
                            let arr = args._[0] !== undefined ? args._[0].split(",") : args.place.split(",");
                            onChangePacmanCommand('place', arr);
                            print(`The place is ${args._[0] || args.place}`);
                        },
                        options: [
                            {
                                name: 'place',
                                description: 'The place input should be',
                                defaultValue: "4,0,WEST"
                            },
                        ],
                    },
                    'MOVE': () => onChangePacmanCommand('move'),
                    'LEFT': () => onChangePacmanCommand('left'),
                    'RIGHT': () => onChangePacmanCommand('right'),
                    'REPORT': () => onChangePacmanCommand('report')
                }}
                descriptions={{
                    'move': 'move pacman',
                    'left' : 'move pacman in left direction',
                    'right': 'move pacman in right direction',
                    'report': 'pacman output'
                }}
                hideTopBar={true}
                msg='Start adding commands here: '
            />
        );
    }
};

export default ReactTerminal;