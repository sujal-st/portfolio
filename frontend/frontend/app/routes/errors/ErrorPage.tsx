import { NavLink } from "react-router"
import LightRays from "~/components/LightRays"

function ErrorPage() {
  return (
    <section className='max-w-xl max-h-screen mx-auto mt-30 text-center flex flex-col items-center space-y-5'>
      <div>
        <h1 className='font-bold text-7xl text-secondary'>404</h1>
        <p className='text-3xl text-ternary font-semibold'>Page Not Found</p>
      </div>
      <NavLink to="/" className="px-2 py-3 w-fit bg-btn-primary text-primary hover:bg-hover-btn-primary hover:scale-102 transition-all font-semibold rounded">Redirect to Home</NavLink>
    </section>
  )
}

export default ErrorPage
