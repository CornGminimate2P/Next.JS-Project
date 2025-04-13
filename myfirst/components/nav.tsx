import Link from "next/link"

const nav = () => {
	return (
		<nav className="flex text-2xl justify-between">
			<div className="flex gap-4">
				<Link href='/'>Home</Link>
				<Link href='/about'>about</Link>
				<Link href={'/camp'}>camp</Link>
				<Link href={'/info'}>info</Link>
			</div>

			<div className="flex gap-4">
				<Link href={'/login'}>Login</Link>
				<Link href={'/register'}>Register</Link>
			</div>
		</nav>
	)
}
export default nav
