import React from 'react'

interface Props {
    name: string ;
}

const Greeting = ({name}:Props): React.ReactNode => {

    return <div>Bonjour, {name} !</div>;
}

export default Greeting
