import Link from "next/link"

export default function Footer(){
  return (
    <div id="footer">
        <ul><li><a><Link href="https://youtube.com/@mattheusfernandes">youtube</Link></a></li></ul>
        <ul><li><a><Link href="/">spotify</Link></a></li></ul>
        <ul><li><a><Link href="/">deezer</Link></a></li></ul>
      </div>
  )
}