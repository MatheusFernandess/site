import Link from "next/link"

export default function Footer(){
  return (
    <div id="footer">
        <ul><li><Link href="https://youtube.com/@mattheusfernandes">youtube</Link></li></ul>
        <ul><li><Link href="/">spotify</Link></li></ul>
        <ul><li><Link href="/">deezer</Link></li></ul>
        <ul><li><Link href="/">twiter</Link></li></ul>
      </div>
  )
}