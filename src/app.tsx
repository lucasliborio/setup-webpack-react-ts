import Image from './usnfwspatch.svg'

export const App = () => {
  return (
    <>
      <h1>Template webpack for React</h1>
      <p>{process.env.name}</p>
      <img src={Image}></img>
    </>
  )
}