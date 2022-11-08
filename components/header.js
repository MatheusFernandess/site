import Link from 'next/link';

export default function Header(){
  return (
    <div id="menu">
        <ul><li><a><Link href="/">Home</Link></a></li></ul>
        <ul><li><a><Link href="/cifras">Cifras</Link></a></li></ul>
        <ul><li><a><Link href="/musicas">Músicas</Link></a></li></ul> 
        <ul><li><a><Link href="/contato">Contato</Link></a></li></ul>  
      </div>
  )
}