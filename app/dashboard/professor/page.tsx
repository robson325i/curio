import ProfessorPanel from "@/components/professorPanel"

const Dashboard = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full mt-2
      justify-center items-center mx-auto 
      md:flex-row md:items-start max-w-4xl gap-3">
      <ProfessorPanel />
    </main>
  )
}

export default Dashboard