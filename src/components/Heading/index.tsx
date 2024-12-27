import {ReactNode} from 'react'

const Heading = ({title, children}:{title:string, children:ReactNode}) => {
  return (
    <h2 style={{ textAlign:"center", fontSize:30, paddingTop:20}}>
        {title}
        {children}
    </h2>
  )
}

export default Heading