import { memo } from "react"

interface Props {
    subtitle: string,
    callMyAPI: () => void;
}
export const MySubtitle = memo(({ subtitle, callMyAPI }: Props) => {
    console.log("subtitle re render")
    return (
        <>
            <h6 className="text-2xl font-bold">{subtitle}</h6>
            <button className="bg-indigo-500 text-white rounded-md cursor-pointer"
                onClick={callMyAPI}
            >Llamar a función</button>
        </>
    )
})

