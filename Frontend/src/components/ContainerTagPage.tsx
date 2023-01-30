const ContainerTagPage = (props: any) => {
  return (
    <div className="px-5 bg-white h-4/5 rounded overflow-y-auto  scrollbar-hidea">
      {props.children}
    </div>
  )
}

export default ContainerTagPage
