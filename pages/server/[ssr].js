export async function getServerSideProps(context){
  const id = context.query.ssr;

  return {
    props: {
      id: id
    }
  }
}

export default function AppSSR (props){

  return (
    <div className='p-8'>
      <p>SSR - Server side Rendering</p>
      <p>Id da página: {props.id}</p>
    </div>
  )
}