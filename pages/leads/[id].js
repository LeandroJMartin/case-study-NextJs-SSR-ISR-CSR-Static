export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: '1',
      }
    },{
      params: {
        id: '2',
      }
    }],
    fallback: 'blocking' // false or 'blocking'
  };
}

export async function getStaticProps(context){
  const id = context.params.id;
  return {
    props: {
        id: id
    },
    revalidate: 3,
  }
}

export default function SSGAPP ( props ){
  return (
    <div className="p-8">
      <p>ISR - Incremental Static Regeneration</p>
      <p>Id do lead: {props.id}</p>
    </div>
  )
}