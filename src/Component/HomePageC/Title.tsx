
type TitleProps = {
  title : string ;
}

const Title = ( {title} : TitleProps ) => {
  return (
    <div className="text-6xl font-extrabold  text-white border-3 border-blue-200 text-center p-6 mb-4 rounded-3xl shadow-2xl bg-green-400  ">
        <h1> {title} </h1>
    </div>
  )
}

export default Title