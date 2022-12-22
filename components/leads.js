
export const getStaticProps = async () => {
  const response = await fetch('https://doncastro.adv.br/suporte-juridico-e-assessoria/inc/data.json')
  const data = await response.json()

  return {
    props: {
      leads: data,
    }
  }
}