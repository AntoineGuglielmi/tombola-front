export default function Background() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/bg/image.png')",
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center',
        backgroundSize: '100vw auto',
      }}
      className="absolute inset-0 -z-10"
    ></div>
  )
}
