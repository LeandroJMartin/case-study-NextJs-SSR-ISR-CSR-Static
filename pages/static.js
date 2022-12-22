export default function Static ( leads ){

  const lead = leads.leads[0];

  console.log(leads);

  return (
    <div className="p-8">
      <h1 className="font-bold text-3xl">Static Page</h1>
      <i className="pb-5 block">Consumindo API leads - DonCastro</i>

      <ul>
        <li><span className="font-bold">Nome:</span> {lead.dados.nome}</li>
        <li><span className="font-bold">E-mail:</span> {lead.dados.email}</li>
        <li><span className="font-bold">Telefone:</span> {lead.dados.telefone}</li>
        <li><span className="font-bold">Mensagem:</span> {lead.dados.mensagem}</li>
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://doncastro.adv.br/suporte-juridico-e-assessoria/inc/data.json')
  const data = await response.json()

  return {
    props: {
      leads: data,
    }
  }
}