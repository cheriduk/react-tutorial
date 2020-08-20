import React,{Component} from 'react'
import Table from   './Table'
import Api from './Api'
import Form from './Form'

// class App extends Component {
//     render() {
//         const characters = [
//             {
//                 name: 'Charlie',
//                 job: 'Janitor',
//               },
//               {
//                 name: 'Mac',
//                 job: 'Bouncer',
//               },
//               {
//                 name: 'Dee',
//                 job: 'Aspring actress',
//               },
//               {
//                 name: 'Dennis',
//                 job: 'Bartender',
//               },
//         ]
//        return (
//         <div className='container'>
//             <h1>Hello,React !</h1>
//             <Table characterData={characters}/>
//         </div>
//        )
//     }
// }


class App extends Component {
    state = {
        characters: [
            // {
            //     name: 'Charlie',
            //     job: 'Janitor',
            // },
            // {
            //     name: 'Mac',
            //     job: 'Bouncer',
            // },
            // {
            //     name: 'Dee',
            //     job: 'Aspring actress',
            // },
            // {
            //     name: 'Dennis',
            //     job: 'Bartender',
            // },
        ],
    }

    removeCharacter = (index) => {
        const {characters} = this.state
    
        this.setState({
            characters: characters.filter((character,i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters,character]})
    }

    render() {
        const { characters } = this.state
    
        return (
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit}/>
            <Api/>
          </div>
        )
      }
}






export default App