import Image from "next/image"

export default function Background(){
  return (
   <div style={{
      zIndex: -1,
      position: "fixed",
      width: "100vw",
      height: "100vw",
      
   }}>
    <Image
        src="/bd.jpg"
        alt="background guitar"
        layout="fill"
        objectFit='background'
      />
      </div>
      )
}