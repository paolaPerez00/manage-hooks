import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle"

export const MemoHook = () => {

    const [title, setTitle] = useState('Prueba inicial')
    const [subtitle, setSubTitle] = useState('Prueba inicial sub')

    const handleMyAPI = useCallback(() => {
        console.log("Llamar API ", subtitle)
    }, [subtitle])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>
            <MyTitle title={title} />
            <MySubtitle subtitle={subtitle} callMyAPI={handleMyAPI} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Hello')}
            >
                Cambiar titulo
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubTitle('World')}
            >
                Cambiar subtitulo
            </button>
        </div>
    )
}

