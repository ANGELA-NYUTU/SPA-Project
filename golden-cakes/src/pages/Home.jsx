import logo from "../assets/logo.png"

function Home() {
  return (
    <div className="p-6 text-center bg-white min-h-screen">
      <img
        src={logo}
        alt="Cake Shop logo"
        className="mx-auto mt-6 w-40 rounded-lg shadow-lg"
      />

      <h1 className="text-4xl font-bold text-[#0033a0] mt-6">
        Golden Crumbs Cake Shop
      </h1>

      <p className="mt-4 text-lg text-black">
        Welcome to the Admin Portal.
      </p>

      <div className="mt-8 bg-[#0033a0] text-white p-6 rounded-lg max-w-3xl mx-auto shadow-lg">
        <h2 className="text-2xl font-bold text-[#d4af37] mb-4">
          Contact Information
        </h2>

        <p className="mb-2">
          <strong>Address:</strong> 25 Nairobi Street, Nairobi, Kenya
        </p>

        <p className="mb-2">
          <strong>Phone:</strong> +254 712 345 678
        </p>

        <p className="mb-2">
          <strong>Email:</strong> info@goldencrumbs.com
        </p>

        <p>
          <strong>Working Hours:</strong> Monday - Saturday, 8:00 AM - 6:00 PM
        </p>
      </div>
    </div>
  )
}

export default Home