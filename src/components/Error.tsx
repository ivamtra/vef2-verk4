interface ErrorProps {
    message: string
}

const Error = (errorProps : ErrorProps) => {
    const {message} = errorProps
    return (
        <>
        <h1 className=" text-red-500 text-3xl">Error : {message} </h1>
        </>
    )
}

export default Error