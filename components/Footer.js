import Image from 'next/image'

export default function FooterApp(){
  return (
    <footer className="bg-slate-200 text-center py-4 mt-5">
      <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      className='text-slate-700'
      >
      Powered by{' '}
      <span className="">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
      </a>
    </footer>
  )
}