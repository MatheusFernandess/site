import Link from 'next/link';

export default function Header(){
  return (
    <div id="menu">
        <ul><li><Link href="/">Home</Link></li></ul>
        <ul><li><Link href="/letras">Letras</Link></li></ul>
        <ul><li><Link href="/musicas">Músicas</Link></li></ul> 
        <ul><li><Link href="/contato">Contato</Link></li></ul>  
        <ul><li><Link href="/flags">Flags</Link></li></ul>  
      </div>
  )
}