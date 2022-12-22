import Link from "next/link";

export default function NavigationApp (){
  return (
    <nav className="p-4 bg-slate-800 flex justify-center">
      <Link href="/server/ssr">
        <a className="pl-3 pr-3 text-white hover:text-blue-400">SSR</a>
      </Link>
      <Link href="/leads/1">
        <a className="pl-3 pr-3 text-white hover:text-blue-400">ISR</a>        
      </Link>
      <Link href="/csr">
        <a className="pl-3 pr-3 text-white hover:text-blue-400">CSR</a>        
      </Link>
      <Link href="/static">
        <a className="pl-3 pr-3 text-white hover:text-blue-400">Static</a>        
      </Link>
    </nav>
  )
}