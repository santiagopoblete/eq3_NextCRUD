import HomeLink from "@/components/HomeLink";

export default async function Encyclopedia({
    params,
}: {
    params: Promise<{ slug:string[] }>;
}) {
    const {slug} = await params;

    if(slug?.length == 2) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1> Viewing information about {slug[0]} {slug[1]}</h1>
                <HomeLink />
            </div>
        );
    } else if(slug?.length == 1) {
        return(
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1> Viewing general information about {slug[0]}</h1>
                <HomeLink />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1> This is the home page of the encyclopedia, if you want to see specific info type it your route!</h1>
            
            <HomeLink />
        </div>
    )
}