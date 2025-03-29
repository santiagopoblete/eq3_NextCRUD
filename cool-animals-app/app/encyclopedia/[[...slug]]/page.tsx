export default async function Encyclopedia({
    params,
}: {
    params: Promise<{ slug:string[] }>;
}) {
    const {slug} = await params;

    if(slug?.length == 2) {
        return (
            <h1> Viewing information about {slug[0]} {slug[1]}</h1>
        );
    } else if(slug?.length == 1) {
        return(<h1> Viewing general information about {slug[0]}</h1>)
    }

    return (<h1>Encyclopedia home page</h1>)
}