import Nav from "@/components/nav"
import './globals.css'
import { Metadata } from "next"

export const metadata:Metadata ={
	title: 'Kuay bOOm'
}

const layout = ({ children }) => {
	return (
		<html>
			<body>
				<Nav/>
				{children}
			</body>
		</html>
	)
}
export default layout
