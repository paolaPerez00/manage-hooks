import { RouterProvider } from "react-router"
import { router } from "./router/app.router"

export const ProfessionalApp = () => {
    return (
        <div className="bg-gradient flex flex-col">
            < RouterProvider router={router} />
        </div>
    )
}

