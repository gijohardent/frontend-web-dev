import UserComponent from "./component/UserComponent.tsx"

function App() {
  return (
    <>
      <UserComponent
        nama="John Doe"
        nim={123456}
        fakultas="Ilmu Komputer"
        prodi="Informatika"
        semester={12}
      />
    </>
  )
}

export default App