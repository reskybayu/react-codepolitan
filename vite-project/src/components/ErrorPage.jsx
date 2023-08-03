import { useRouteError } from "react-router-dom";
function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <div>Opss ! ada Error</div>
        </>
    )
}

export default ErrorPage;