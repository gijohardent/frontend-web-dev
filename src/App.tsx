import UserComponent from "./component/UserComponent.tsx"

function App() {
  return (
    <>
      <UserComponent
        nama="John Doe"
        email="johndoe@gmail.com"
        nim={12345}
      />
    </>
  )
}

export default App
